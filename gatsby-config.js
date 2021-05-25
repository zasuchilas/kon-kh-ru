module.exports = {
  siteMetadata: {
    title: 'Konstantin Kh.',
    description: 'Бумажные сайты',
    keywords: 'landing, лендинг, site, сайт, создание, разработка, улучшение',
    url: 'https://kon-kh.ru',
    author: '@kon-kh',
  },
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 650,
              linkImagesToOriginal: true,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /images/,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `kon-kh.ru`,
        short_name: `kon-kh`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#FF0000`,
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: `standalone`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-react-helmet',
    // {
    //   resolve: `gatsby-plugin-yandex-metrika`,
    //   options: {
    //     // The ID of yandex metrika.
    //     trackingId: 71337565,
    //     // Enabled a webvisor. The default value is `false`.
    //     webvisor: true,
    //     // Enables tracking a hash in URL. The default value is `false`.
    //     trackHash: true,
    //     // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
    //     // and `true` means after the body (faster loading, less hits). The default value is `false`.
    //     afterBody: true,
    //     // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
    //     // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
    //     defer: false,
    //   },
    // },
  ],
};
