// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Protectors of the Realm',
  staticDirectories: ['public', 'static'],
  tagline: 'Dragons & Diplomacy in the Realm of Karitha',
  url: 'https://protectors.netlify.app',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'jacksmedia', // Usually your GitHub org/user name.
  projectName: 'protectors', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/jacksmedia/protectors',
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
        title: 'Protectors',
        logo: {
          alt: 'Protectors of the Realm',
          src: 'img/dragonfly.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Guides',
          },
          {to: '/blog', label: 'FAQ', position: 'left'},
          {
            href: 'https://github.com/jacksmedia/protectors',
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
                label: 'Intro',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Protectors Discord - Play the Game!',
                href: 'https://discord.gg/6uP4pUgXpC',
              },
              {
                label: 'Lannuvar DAO in Realm of Karitha',
                href: 'https://lannuvar.super.site',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'J4cks\'s Twitter',
                href: 'https://twitter.com/xJ4cks',
              },
              {
                label: 'xJ4cks Insta',
                href: 'https://www.instagram.com/xj4cks',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Jacks dot Media. Support Protectors: erd1mwvw34826j6nm4wc04qxrnxgphquwkahfe0ughgakz6s5qrs2u5swdsdxs`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
