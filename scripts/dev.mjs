import { watch } from 'node:fs';
import process from 'node:process';
import { blogSourceDir, renderBlog, shouldIgnoreBlogPath, startNpmScript } from './blog-utils.mjs';

let renderTimer;
let isRendering = false;
let renderQueued = false;

function queueRender(reason) {
  if (isRendering) {
    renderQueued = true;
    return;
  }

  isRendering = true;
  const status = renderBlog({ reason });
  isRendering = false;

  if (status !== 0) {
    console.error(`[blog] Render failed with exit code ${status}. Watching for more changes...`);
  }

  if (renderQueued) {
    renderQueued = false;
    queueRender('queued changes');
  }
}

queueRender('initial dev sync');

const viteProcess = startNpmScript('dev:app');
const watcher = watch(blogSourceDir, { recursive: true }, (eventType, filename) => {
  const changedPath = typeof filename === 'string' ? filename : '';

  if (shouldIgnoreBlogPath(changedPath)) {
    return;
  }

  clearTimeout(renderTimer);
  renderTimer = setTimeout(() => {
    queueRender(`${eventType}: ${changedPath.replace(/\\/g, '/')}`);
  }, 250);
});

function shutdown(signal) {
  clearTimeout(renderTimer);
  watcher.close();

  if (!viteProcess.killed) {
    viteProcess.kill(signal);
  }
}

process.on('SIGINT', () => {
  shutdown('SIGINT');
  process.exit(0);
});

process.on('SIGTERM', () => {
  shutdown('SIGTERM');
  process.exit(0);
});

viteProcess.on('exit', (code) => {
  clearTimeout(renderTimer);
  watcher.close();
  process.exit(code ?? 0);
});
