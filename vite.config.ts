import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = dirname(fileURLToPath(import.meta.url));
const siteBase = '/portfolio/';
const generatedBlogDir = resolve(rootDir, 'public', 'blog');
const generatedBlogIndex = resolve(generatedBlogDir, 'index.html');

function blogReloadPlugin(): Plugin {
  return {
    name: 'generated-blog-reload',
    configureServer(server) {
      server.watcher.add(generatedBlogDir);

      const triggerReload = (file: string) => {
        if (file.startsWith(generatedBlogDir)) {
          server.ws.send({ type: 'full-reload' });
        }
      };

      server.watcher.on('add', triggerReload);
      server.watcher.on('change', triggerReload);
      server.watcher.on('unlink', triggerReload);

      server.middlewares.use((req, res, next) => {
        const pathname = new URL(req.url ?? '/', 'http://localhost').pathname;
        const blogRoot = `${siteBase}blog`;

        if (pathname === blogRoot) {
          res.statusCode = 302;
          res.setHeader('Location', `${blogRoot}/`);
          res.end();
          return;
        }

        if (pathname === `${blogRoot}/index.html`) {
          res.statusCode = 302;
          res.setHeader('Location', `${blogRoot}/`);
          res.end();
          return;
        }

        if (pathname === `${blogRoot}/`) {
          if (!existsSync(generatedBlogIndex)) {
            next();
            return;
          }

          res.statusCode = 200;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.end(readFileSync(generatedBlogIndex, 'utf-8'));
          return;
        }

        next();
      });
    },
  };
}

export default defineConfig({
  base: siteBase,
  plugins: [react(), blogReloadPlugin()],
});
