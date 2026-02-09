export default {
  theme: "default",
  // Core site information used across the platform
  site: {
    // Site name shown in title tags and navigation
    name: "WebNami",
    // Base URL for generating absolute links and sitemaps
    url: "http://example.com",
    // Language code for HTML lang attribute and SEO
    language: "en",
    // Logo image path
    logo: "/images/logo.png",
    // Browser tab icon
    favicon: "/images/favicon.ico",
    // Content Security Policy (CSP)
    csp: "object-src 'none'; base-uri 'self'; upgrade-insecure-requests;",
  },

  // Number of posts per page on listing pages
  postsPerPage: 20,

  // Homepage specific settings
  homepage: {
    // Main homepage heading text
    heading: "WebNami - a simple and lightweight blogging tool",
    // SEO metadata for homepage
    metadata: {
      // HTML title tag content
      title: "Home",
      // Meta description for search engines
      description: "This is a description of our website",
      // Social sharing image - used in open graph tags
      img: "/images/logo.png",
    },
  },

  // Main navigation bar configuration.
  // If a link has a cta property, it will be styled as a call-to-action button.
  navbar: {
    links: [
      // Regular navigation link
      { name: "About", href: "/about" },
      // Regular navigation link
      { name: "Contact", href: "#" },
    ],
  },

  // Footer section configuration
  footer: {
    // Social media links displayed with lucide icons
    socialLinks: [
      // Social platform name (matches icon name)
      { name: "facebook", href: "#" },
      { name: "twitter", href: "#" },
      { name: "instagram", href: "#" },
    ],
    // Grouped footer links organized in columns
    linkGroups: [
      {
        // Column heading
        title: "CATEGORY 1",
        links: [
          // Individual footer link
          { name: "About", href: "/about" },
          { name: "Home", href: "/" },
        ],
      },
      {
        // Second column - empty column heading
        links: [
          { name: "RSS", href: "/rss.xml" },
          { name: "Sitemap", href: "/sitemap.xml" },
        ],
      },
    ],
  },
};
