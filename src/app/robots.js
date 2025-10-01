export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://www.aayush-khadka.tech/sitemap.xml",
  };
}
