const baseUrl = "https://www.aayush-khadka.tech";
const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD

export async function GET() {
  const urls = [
    { loc: `${baseUrl}/`, priority: 1.0, changefreq: "monthly" },
    { loc: `${baseUrl}/resume.pdf`, priority: 0.6, changefreq: "yearly" },
    { loc: `${baseUrl}/#about`, priority: 0.7, changefreq: "yearly" },
    { loc: `${baseUrl}/#education`, priority: 0.7, changefreq: "yearly" },
    { loc: `${baseUrl}/#skills`, priority: 0.8, changefreq: "yearly" },
    { loc: `${baseUrl}/#projects`, priority: 0.9, changefreq: "monthly" },
    { loc: `${baseUrl}/#contact`, priority: 0.8, changefreq: "monthly" },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls
    .map(
      ({ loc, priority, changefreq }) => `
  <url>
    <loc>${loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
    )
    .join("")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
