export async function GET() {
  const content = `
User-agent: *
Allow: /

Sitemap: https://www.aayush-khadka.tech/sitemap.xml
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
