// generate-sitemap.js
const fs = require('fs');
const path = require('path');

const BASE_URL = 'https://cholab.science';

// 👇 Public-facing routes only (excluding admin, login, dynamic pages)
const staticRoutes = [
    '/',
    '/about',
    '/news',
    '/publication',
    '/research',
    '/opportunities',
    '/mentorship'
];

// Optional: include representative dynamic routes for better indexing
const dynamicExamples = [
    '/news/sample-article-id',
    '/ourResearch/sample-research-id'
];

const routes = [...staticRoutes, ...dynamicExamples];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="https://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url><loc>${BASE_URL}${route}</loc></url>`).join('\n')}
</urlset>`;

fs.writeFileSync(path.join(__dirname, 'public', 'sitemap.xml'), sitemap);
console.log('✅ Sitemap generated at /public/sitemap.xml');
