/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const LIB_CDN = 'https://stgcdn.mykukun.com/kukun-lib/v1-0-0/dist/';

// List of projects/orgs using your project for the users page.
const users = [
  {
    caption: 'User1',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/image.jpg'.
    image: '/img/undraw_open_source.svg',
    infoLink: 'https://www.facebook.com',
    pinned: true,
  },
];

const siteConfig = {
  title: 'Kukun Documentation', // Title for your website.
  tagline: 'Front-end',
  url: 'https://mykukun.github.io', // Your website URL
  baseUrl: '/Kukun-lib/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'Kukun-lib',
  organizationName: 'MYKUKUN',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'

  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    {doc: 'getting-started/introduction', label: 'Docs'},
    // {doc: 'doc4', label: 'API'},
    // {page: 'help', label: 'Help'},
    {blog: true, label: 'Changelog'},
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/kukun-logo-desktop.svg',
  footerIcon: 'img/kukun-logo-desktop.svg',
  favicon: 'img/kukun-logo-desktop.svg',

  /* Colors for website */
  colors: {
    primaryColor: '#f05825',
    secondaryColor: '#f2f2f2',
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Kukun. All rights reserved.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: [
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/Kukun-lib/js/code-block-buttons.js',
    '/Kukun-lib/kukun-lib/kukun-lib.js'
  ],
  stylesheets: [
    '/Kukun-lib/css/code-block-buttons.css',
    `${LIB_CDN}iconography/my-kukun-icons.min.css`,
  ],
  separateCSS: [
    '/Kukun-lib/kukub-lib/kukun-lib.css'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/undraw_online.svg',
  twitterImage: 'img/undraw_tweetstorm.svg',

  // For sites with a sizable amount of content, set collapsible to true.
  // Expand/collapse the links and subcategories under categories.
  // docsSideNavCollapsible: true,

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  // repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
