export default {
  // Core site information used across the platform
  site: {
    // Site name shown in title tags and navigation
    name: "WebNami",
    // Base URL for generating absolute links and sitemaps
    url: "http://example.com",
    // Language code for HTML lang attribute and SEO
    language: "en",
  },

  // Visual branding and identity settings
  branding: {
    // Browser tab icon
    favicon: "/images/favicon.ico",
    logo: {
      // Logo image path
      src: "/images/logo.svg",
      // Alt text for logo accessibility
      alt: "Logo",
    },
  },

  // Configuration for listing pages (homepage, categories, tags etc)
  listings: {
    // Pagination settings for all listing pages
    pagination: {
      // Number of posts per page on listing pages
      postsPerPage: 10,
    },
    // What to show in post previews/cards on listing pages
    postPreview: {
      // Display author name in post cards
      showAuthorInListing: true,
      // Display publish date in post cards
      showDateInListing: true,
      // Display post category in post cards
      showCategoryInListing: true,
      // Display post excerpt/summary in post cards
      showExcerptInListing: true,
    },
  },

  // Page-specific configurations
  pages: {
    // Homepage specific settings
    homepage: {
      // Whether to display the main heading
      showHeading: true,
      // Whether to center the heading text
      centerHeading: true,
      // Main homepage heading text
      heading: "Welcome to WebNami",
      // Homepage subtitle
      subheading:
        "Your beautiful blog is ready to go! Start writing your first post",
      // Whether to show category navigation below heading
      showCategoryNavigation: true,
      // SEO metadata for homepage
      metadata: {
        // HTML title tag content
        title: "Home",
        // Meta description for search engines
        description: "This is a description of our website",
        // Social sharing image - used in open graph tags
        image:
          "https://fastly.picsum.photos/id/12/2500/1667.jpg?hmac=Pe3284luVre9ZqNzv1jMFpLihFI6lwq7TPgMSsNXw2w",
      },
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
      // Call-to-action button (styled differently)
      { name: "Get Started", href: "#", cta: true },
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
        // Whether to display the column title
        displayGroupTitle: true,
        links: [
          // Individual footer link
          { name: "About", href: "/about" },
          { name: "Home", href: "/" },
        ],
      },
      {
        // Second column
        title: "CATEGORY 2",
        // Hide this column's title
        displayGroupTitle: false,
        links: [
          { name: "Privacy Policy", href: "#" },
          { name: "Terms", href: "#" },
        ],
      },
    ],
  },
};
