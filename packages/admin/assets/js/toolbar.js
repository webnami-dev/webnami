import { icons } from "lucide";

function lucideIcon(name) {
  const key = name
    .split("-")
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join("");
  const data = icons[key];
  if (!data) return "";
  const els = data
    .map(([tag, attrs]) => {
      const a = Object.entries(attrs)
        .map(([k, v]) => `${k}="${v}"`)
        .join(" ");
      return `<${tag} ${a}/>`;
    })
    .join("");
  return `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${els}</svg>`;
}

export function getToolbar() {
  return [
    {
      name: "bold",
      action: EasyMDE.toggleBold,
      icon: lucideIcon("bold"),
      title: "Bold",
    },
    {
      name: "italic",
      action: EasyMDE.toggleItalic,
      icon: lucideIcon("italic"),
      title: "Italic",
    },
    {
      name: "strikethrough",
      action: EasyMDE.toggleStrikethrough,
      icon: lucideIcon("strikethrough"),
      title: "Strikethrough",
    },
    {
      name: "underline",
      action(ed) {
        const cm = ed.codemirror;
        const sel = cm.getSelection();
        cm.replaceSelection(`<u>${sel || "underline"}</u>`);
      },
      icon: lucideIcon("underline"),
      title: "Underline",
    },
    "|",
    {
      name: "heading-1",
      action: EasyMDE.toggleHeading1,
      icon: lucideIcon("heading-1"),
      title: "Heading 1",
    },
    {
      name: "heading-2",
      action: EasyMDE.toggleHeading2,
      icon: lucideIcon("heading-2"),
      title: "Heading 2",
    },
    {
      name: "heading-3",
      action: EasyMDE.toggleHeading3,
      icon: lucideIcon("heading-3"),
      title: "Heading 3",
    },
    {
      name: "heading-4",
      action: EasyMDE.toggleHeading4,
      icon: lucideIcon("heading-4"),
      title: "Heading 4",
    },
    {
      name: "heading-5",
      action: EasyMDE.toggleHeading5,
      icon: lucideIcon("heading-5"),
      title: "Heading 5",
    },
    {
      name: "heading-6",
      action: EasyMDE.toggleHeading6,
      icon: lucideIcon("heading-6"),
      title: "Heading 6",
    },
    "|",
    {
      name: "quote",
      action: EasyMDE.toggleBlockquote,
      icon: lucideIcon("quote"),
      title: "Blockquote",
    },
    {
      name: "unordered-list",
      action: EasyMDE.toggleUnorderedList,
      icon: lucideIcon("list"),
      title: "Unordered List",
    },
    {
      name: "ordered-list",
      action: EasyMDE.toggleOrderedList,
      icon: lucideIcon("list-ordered"),
      title: "Ordered List",
    },
    "|",
    {
      name: "code",
      action: EasyMDE.toggleCodeBlock,
      icon: lucideIcon("code"),
      title: "Code",
    },
    {
      name: "link",
      action: EasyMDE.drawLink,
      icon: lucideIcon("link"),
      title: "Link",
    },
    {
      name: "image",
      action: EasyMDE.drawImage,
      icon: lucideIcon("image"),
      title: "Image",
    },
    {
      name: "table",
      action: EasyMDE.drawTable,
      icon: lucideIcon("table"),
      title: "Table",
    },
    "|",
    {
      name: "horizontal-rule",
      action: EasyMDE.drawHorizontalRule,
      icon: lucideIcon("minus"),
      title: "Horizontal Rule",
    },
  ];
}
