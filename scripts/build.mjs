import process from 'node:process';
import { renderBlog, runNpmScript } from './blog-utils.mjs';

const blogStatus = renderBlog({ reason: 'production build' });

if (blogStatus !== 0) {
  process.exit(blogStatus);
}

process.exit(runNpmScript('build:app'));
