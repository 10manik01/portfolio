import process from 'node:process';
import { renderBlog } from './blog-utils.mjs';

process.exit(renderBlog({ reason: 'manual render' }));
