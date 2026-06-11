export async function GET() {
  const baseUrl = 'https://watutech.com';
  
  const routes = [
    { path: '', priority: '1.0', changefreq: 'weekly' },
    { path: '#layanan', priority: '0.9', changefreq: 'weekly' },
    { path: '#keunggulan', priority: '0.9', changefreq: 'weekly' },
    { path: '#portfolio', priority: '0.9', changefreq: 'weekly' },
    { path: '#proses', priority: '0.8', changefreq: 'monthly' },
    { path: '#faq', priority: '0.8', changefreq: 'monthly' },
    { path: '#kontak', priority: '0.9', changefreq: 'monthly' },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${routes
    .map(({ path, priority, changefreq }) => {
      return `
  <url>
    <loc>${baseUrl}${path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
    })
    .join('')}
</urlset>
`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  });
}
