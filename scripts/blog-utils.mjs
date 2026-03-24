import { spawn, spawnSync } from 'node:child_process';
import { cpSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import process from 'node:process';
import { fileURLToPath } from 'node:url';

const scriptDir = dirname(fileURLToPath(import.meta.url));

export const repoRoot = resolve(scriptDir, '..');
export const blogSourceDir = resolve(repoRoot, 'my blog');
export const blogOutputDir = resolve(repoRoot, 'public', 'blog');
export const blogBuildDir = resolve(blogSourceDir, '_site');

const quartoCommand = 'quarto';
const npmCommand = 'npm';

function log(message) {
  console.log(`[blog] ${message}`);
}

function resetBlogOutput() {
  rmSync(blogOutputDir, { recursive: true, force: true });
  mkdirSync(blogOutputDir, { recursive: true });
}

function syncBlogOutput() {
  resetBlogOutput();
  cpSync(blogBuildDir, blogOutputDir, { force: true, recursive: true });
}

function pruneSyncedArtifacts() {
  rmSync(resolve(blogOutputDir, '_site'), { recursive: true, force: true });
  rmSync(resolve(blogOutputDir, 'CNAME'), { force: true });
}

export function renderBlog({ reason } = {}) {
  log(reason ? `Rendering Quarto output for ${reason}...` : 'Rendering Quarto output...');

  const result = spawnSync(quartoCommand, ['render', '.'], {
    cwd: blogSourceDir,
    shell: process.platform === 'win32',
    stdio: 'inherit',
  });

  if (result.error) {
    console.error(result.error.message);
    return 1;
  }

  const status = result.status ?? 1;

  if (status !== 0) {
    return status;
  }

  syncBlogOutput();
  pruneSyncedArtifacts();
  return 0;
}

export function runNpmScript(scriptName) {
  const result = spawnSync(npmCommand, ['run', scriptName], {
    cwd: repoRoot,
    shell: process.platform === 'win32',
    stdio: 'inherit',
  });

  if (result.error) {
    console.error(result.error.message);
    return 1;
  }

  return result.status ?? 1;
}

export function startNpmScript(scriptName) {
  return spawn(npmCommand, ['run', scriptName], {
    cwd: repoRoot,
    shell: process.platform === 'win32',
    stdio: 'inherit',
  });
}

export function shouldIgnoreBlogPath(rawPath = '') {
  const normalizedPath = rawPath.replace(/\\/g, '/');

  return (
    !normalizedPath ||
    normalizedPath.startsWith('.git/') ||
    normalizedPath.startsWith('.quarto/') ||
    normalizedPath.startsWith('.cursor/') ||
    normalizedPath.startsWith('_site/')
  );
}
