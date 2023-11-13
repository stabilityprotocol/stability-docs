// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
module.exports = {
  title: "Stability Docs",
  tagline: "Utility, Not Speculation",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://docs.stabilityprotocol.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "stabilityprotocol", // Usually your GitHub org/user name.
  projectName: "stability-docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },
  
  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js")
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            spec: './public-api.yaml',
            route: '/api/',
            url: 'https://github.com/stabilityprotocol/stability-docs/blob/main/public-api.yaml',
          },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          primaryColor: '#1890ff',
        },
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: "dark",
      },
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      docs: {
        sidebar: {
          autoCollapseCategories: true,
          hideable: true,
        },
      },
      navbar: {
        title: "",
        logo: {
          alt: "Stability Logo",
          src: "img/favicon.ico",
        },
        items: [
          {
            to: "/how_it_works",
            label: "How it works",
            position: "left",
          },
          {
            to: "/users",
            label: "Users",
            position: "left",
          },
          {
            to: "/builders",
            label: "Builders",
            position: "left",
          },
          {
            to: "/api",
            label: "Public API",
            position: "left",
          },
          {
            to: "/resources/marketplace",
            label: "App Marketplace",
            position: "right",
          },
          {
            href: "https://stabilityprotocol.com/",
            label: "Main Site",
            position: "right",
          },
          {
            href: "https://github.com/stabilityprotocol",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Blog",
                href: "https://medium.com/stabilitynetwork",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/stabilitysolutions/about/",
              },
              {
                label: "X fka Twitter",
                href: "https://medium.com/stabilitynetwork",
              },
              {
                label: "Discord",
                href: "https://discord.gg/VagSJw6e",
              }
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Main Site",
                href: "https://stabilityprotocol.com/",
              },
              {
                label: "GitHub",
                href: "https://github.com/stabilityprotocol",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Stability Protocol`,
      },
      prism: {
        theme: darkCodeTheme,
        lightTheme: lightCodeTheme,
      },
      algolia: {
        appId: "T322JVBTGD",
        apiKey: "ad18d0d7de1accb5dbbda871e64db2ad",
        indexName: "stble",
        contextualSearch: true,
        debug: false,
        insights: true
      }
    }),
};
