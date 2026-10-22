// app/robots.js
// Crawling is allowed on purpose: the site is already indexed, so Google must be
// able to recrawl pages to see the noindex meta tag / X-Robots-Tag header and drop them.
// Once the pages are gone from Google, this can be switched to `disallow: "/"`.
export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
  };
}
