const { path } = require("@vuepress/utils");

module.exports = {
  base: "/",
  lang: "en-US",
  title: "Flatpack",
  description: "Administration panel for Laravel, ready to assemble.",
  head: [
    ["meta", { name: "theme-color", content: "#1F2937" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  theme: "@vuepress/theme-default",

  themeConfig: {
    darkMode: false,
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    contributors: false,
    themePlugins: {
      mediumZoom: false,
    },
    logo: "/flatpack-icon.png",
    navbar: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Reference",
        link: "/reference/",
      },
      {
        text: "Github",
        link: "https://github.com/laravel-flatpack/flatpack",
      },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "Guide",
          path: "/guide/",
          collapsable: false,
          children: [
            "/guide/",
            "/guide/how-works/",
            "/guide/configuration/",
            "/guide/authentication/",
            "/guide/generators/",
          ],
        },
      ],
      "/reference/": [
        {
          title: "Reference",
          path: "/reference/",
          collapsable: false,
          children: ["form-fields", "table-columns", "layout"],
        },
      ],
    },
  },

  plugins: [
    "@vuepress/plugin-search",
    [
      "@vuepress/register-components",
      {
        componentsDir: path.resolve(__dirname, "./components"),
      },
    ],
  ],

  markdown: {
    code: {
      lineNumbers: false,
    },
    html: true,
  },
};
