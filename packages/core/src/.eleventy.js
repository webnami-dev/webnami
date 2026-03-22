import { readFileSync, writeFileSync, readdirSync, existsSync } from "fs";
import path from "path";
import Image, { eleventyImageTransformPlugin } from "@11ty/eleventy-img";
import pluginRss from "@11ty/eleventy-plugin-rss";
import pluginSyntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight";
import { icons } from "lucide";
import { DateTime } from "luxon";
import htmlmin from "html-minifier-terser";

import postManagement from "./_plugins/post-management.js";
import contentFilters from "./_plugins/content-filters.js";

export default function (eleventyConfig) {
  const config = JSON.parse(readFileSync("_metadata/config.json", "utf-8"));
  const isProd = process.env.NODE_ENV === "production";
  eleventyConfig.setUseTemplateCache(false);
  eleventyConfig.ignores.add("*.md");
  eleventyConfig.ignores.add("*.njk");
  eleventyConfig.ignores.add("themes/**");
  eleventyConfig.addPlugin(pluginRss);
  eleventyConfig.addPlugin(pluginSyntaxHighlight, {
    preAttributes: { tabindex: 0 },
  });
  eleventyConfig.addPlugin(postManagement);
  eleventyConfig.addPlugin(contentFilters);

  eleventyConfig.on("eleventy.before", async () => {
    const { default: sharp } = await import("sharp");
    const siteName = config.site.name;
    const bgColor = "#155dfc";
    const textColor = "#ffffff";

    const og = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="${bgColor}" />
  <text x="600" y="315" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="80" font-weight="bold" fill="${textColor}">${siteName}</text>
</svg>`;
    await sharp(Buffer.from(og)).png().toFile("content/site/og-image.png");

    const initials = siteName.slice(0, 2).toUpperCase();
    const favicon = `<svg width="32" height="32" xmlns="http://www.w3.org/2000/svg">
  <rect width="32" height="32" fill="${bgColor}" rx="4" />
  <text x="16" y="16" dominant-baseline="middle" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" font-size="14" font-weight="bold" fill="${textColor}">${initials}</text>
</svg>`;
    writeFileSync("content/site/favicon.svg", favicon);
  });

  eleventyConfig.addGlobalData("config", config);
  eleventyConfig.addPassthroughCopy({ "./content/site": "images" });
  const imgGlob = "*.{jpg,jpeg,png,webp,gif,svg}";
  for (const type of ["posts", "pages"]) {
    const dir = `./content/${type}`;
    if (!existsSync(dir)) continue;
    for (const slug of readdirSync(dir).filter((s) => s !== "_drafts")) {
      eleventyConfig.addPassthroughCopy({
        [`${dir}/${slug}/${imgGlob}`]: slug,
      });
    }
  }
  eleventyConfig.addPassthroughCopy({
    [`./themes/${config.theme}/assets/fonts`]: "assets/fonts",
  });
  // Add date filter for sitemap

  eleventyConfig.addFilter("postDate", (date) => {
    return DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_MED);
  });

  eleventyConfig.addShortcode("currentYear", () => new Date().getFullYear());

  eleventyConfig.addFilter("date", (date, format) => {
    let d;
    if (date === "") {
      d = new Date();
    } else {
      d = new Date(date);
    }
    if (format === "YYYY-MM-DD") {
      return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
        2,
        "0",
      )}-${String(d.getDate()).padStart(2, "0")}`;
    }
    return d.toISOString();
  });
  eleventyConfig.addFilter("assetHash", (assetPath) => {
    const timestamp = Date.now();
    return `${assetPath}?v=${timestamp}`;
  });

  eleventyConfig.addFilter("slice", (array, start, end) => {
    return array.slice(start, end);
  });

  eleventyConfig.addFilter("headerPages", (pages) => {
    return (pages || []).filter((p) => p.data.showInHeader !== false);
  });

  eleventyConfig.addFilter("footerPages", (pages) => {
    return (pages || []).filter((p) => p.data.showInHeader === false);
  });

  eleventyConfig.addFilter("singleLine", (str, maxLength = 160) => {
    if (!str) return str;
    const cleaned = str
      .replace(/[\r\n]+/g, " ")
      .replace(/\s{2,}/g, " ")
      .trim();
    return cleaned.length > maxLength ? cleaned.slice(0, maxLength) : cleaned;
  });

  const builtWithHtml = `<div class="mt-3 font-mono text-xs text-accent/40"> Built with <a class="hover:text-primary-500 transition-colors text-accent/60" href="https://webnami.in" target="_blank" rel="noopener">webnami</a></div>`;

  eleventyConfig.addTransform("builtWith", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      return content.replace(
        /\s*<\/div>\s*<\/footer>/,
        `${builtWithHtml}</div></footer>`,
      );
    }
    return content;
  });

  eleventyConfig.addTransform("htmlmin", (content, outputPath) => {
    if (outputPath && outputPath.endsWith(".html")) {
      return htmlmin.minify(content, {
        removeComments: true,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
      });
    }
    return content;
  });

  if (isProd) {
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
      // output image formats
      formats: ["webp"],
      // output image widths
      widths: [360, 720, 1080],
      sizes: "(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw",
      filenameFormat(_id, src, width, format) {
        const stem = path.basename(src, path.extname(src));
        return `${stem}-${width}.${format}`;
      },

      // to disable dev server transform
      transformOnRequest: false,

      cacheOptions: {
        duration: "1d",
        directory: ".cache",
      },

      // optional, attributes assigned on <img> nodes override these values
      htmlOptions: {
        imgAttributes: {
          loading: "lazy",
          decoding: "async",
        },
        pictureAttributes: {},
      },

      sharpOptions: {
        animated: true,
        failOnError: false,
        withoutEnlargement: true,
      },
    });
  }

  eleventyConfig.addAsyncFilter("imageFilter", async (src) => {
    if (!src) return "";
    src = `.${src}`;

    if (isProd) {
      try {
        const metadata = await Image(src, {
          widths: [1080],
          formats: ["webp"],
          outputDir: "./_site/images/",
          urlPath: "/images/",
          filenameFormat(_id, src, width, format) {
            const stem = path.basename(src, path.extname(src));
            return `${stem}-${width}.${format}`;
          },
          // Force caching for all images
          cacheOptions: {
            duration: "1d",
            directory: ".cache",
          },
          sharpOptions: {
            animated: true,
            failOnError: false,
            withoutEnlargement: true,
          },
        });

        const format = metadata.webp || metadata.jpeg;
        if (format && format.length > 0) {
          const optimizedUrl = format[format.length - 1].url;
          return optimizedUrl;
        }

        throw new Error("No suitable format found");
      } catch (error) {
        console.error("Error optimizing image:", error);
        return src;
      }
    }
    return src;
  });

  eleventyConfig.addShortcode("icon", (iconName, className = "w-5 h-5") => {
    // Convert kebab-case to PascalCase
    const pascalCaseIconName = iconName
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join("");
    const iconData = icons[pascalCaseIconName];
    if (!iconData) {
      console.log(`Icon '${pascalCaseIconName}' not found`);
      return "";
    }
    if (!Array.isArray(iconData)) {
      return `<!-- Invalid icon data -->`;
    }
    const svgElements = iconData
      .map((element) => {
        const [tagName, attributes] = element;
        // Convert attributes object to attribute string
        const attributeString = Object.entries(attributes)
          .map(([key, value]) => `${key}="${value}"`)
          .join(" ");

        return `<${tagName} ${attributeString}/>`;
      })
      .join("");
    return `<svg class="${className}" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${svgElements}</svg>`;
  });

  eleventyConfig.addCollection("meta", (collectionsApi) => {
    const allItems = collectionsApi.getAllSorted().reverse();
    const { postsPerPage } = config;

    const posts = [];
    const pages = [];
    const tagPosts = new Map();
    const categoryPosts = new Map();
    const authorPosts = new Map();
    const categorySet = new Set();

    for (const item of allItems) {
      const { layout } = item.data;

      // Classify posts and pages
      if (layout === "post" || layout === "post.njk") {
        posts.push(item);
      } else if (layout === "page" || layout === "page.njk") {
        pages.push(item);
      }

      // Collect tags
      if ("tags" in item.data) {
        let itemTags = item.data.tags;
        if (typeof itemTags === "string") itemTags = [itemTags];
        for (const tag of itemTags) {
          if (!tagPosts.has(tag)) tagPosts.set(tag, []);
          tagPosts.get(tag).push(item);
        }
      }

      // Collect authors
      if ("author" in item.data && item.data.author) {
        const { author } = item.data;
        if (!authorPosts.has(author)) authorPosts.set(author, []);
        authorPosts.get(author).push(item);
      }

      // Collect and validate categories
      if ("category" in item.data && item.data.category) {
        const { category } = item.data;
        categorySet.add(category);
        if (!categoryPosts.has(category)) categoryPosts.set(category, []);
        categoryPosts.get(category).push(item);
      }
    }

    // Helper to paginate a sorted list of posts
    function paginate(sortedItems, name) {
      const result = [];
      const totalPages = Math.ceil(sortedItems.length / postsPerPage);
      for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
        const startIndex = (pageNumber - 1) * postsPerPage;
        result.push({
          name,
          page: pageNumber,
          total: sortedItems.length,
          items: sortedItems.slice(startIndex, startIndex + postsPerPage),
        });
      }
      return result;
    }

    // Build paginated posts
    const paginatedPosts = [];
    const totalPages = Math.ceil(posts.length / postsPerPage);
    for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
      const startIndex = (pageNumber - 1) * postsPerPage;
      paginatedPosts.push({
        page: pageNumber,
        total: posts.length,
        items: posts.slice(startIndex, startIndex + postsPerPage),
        postsPerPage,
      });
    }

    // Build tag pages
    const tagPages = [];
    for (const [tagName, items] of tagPosts) {
      tagPages.push(...paginate(items, tagName));
    }

    // Build category pages
    const categoryPages = [];
    for (const [categoryName, items] of categoryPosts) {
      categoryPages.push(...paginate(items, categoryName));
    }

    // Build author pages
    const authorPages = [];
    for (const [authorName, items] of authorPosts) {
      authorPages.push(...paginate(items, authorName));
    }

    const collectionsCache = {
      posts,
      pages,
      paginatedPosts,
      tagPages,
      authorPages,
      categoryList: [...categorySet],
      categoryPages,
    };

    return collectionsCache;
  });

  return {
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
    dir: {
      input: "./",
      includes: `themes/${config.theme}/_includes`,
      layouts: `themes/${config.theme}/_includes/layouts`,
      data: "_metadata",
      output: "_site",
    },
  };
}
