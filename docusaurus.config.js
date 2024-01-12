// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer').themes.github;
const darkCodeTheme = require('prism-react-renderer').themes.dracula;

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Rug\'s Royalties',
  staticDirectories: ['public', 'static'],
  tagline: 'NFT Burning for the Good of All',
  url: 'https://royalties.divergent.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jacksmedia', // Usually your GitHub org/user name.
  projectName: 'royalties', // Usually your repo name.

  headTags: [
    {
      tagName: 'head',
      attributes: {
        title: 'Rug\'s Royalties | DC',
      },
    },
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/jacksmedia/royalties',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Rug\'s Royalties',
        logo: {
          alt: 'Rug\'s Royalties from DC',
          src: 'img/dragonfly.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'FAQ',
            position: 'left',
            label: 'Guides',
          },
          {to: '/blog', label: 'Disclaimer', position: 'left'},
          {
            href: 'https://github.com/jacksmedia/royalties',
            label: 'Code on GH',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Guides',
            items: [
              {
                label: 'Disclaimer',
                to: '/blog',
              },
            ],
          },
          {
            title: 'Connect',
            items: [
              {
                label: 'Project X Discord - Our Parent DAO',
                href: 'https://discord.gg/projectx-dao',
              },
            ],
          },
          {
            title: 'Social Media',
            items: [
              {
                label: 'Divergent\'s Twitter',
                href: 'https://twitter.com/DivergentClub_',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jacks dot Media. Support Divergent Club: erdxxxxxx`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
