const gql = require('graphql-tag');

module.exports = {
  siteMetadata: {
    title: 'Gatsby-TS-MDX-PrismJs-Emotion-Starter',
    description: 'Gatsby-TS-MDX-PrismJs-Emotion-Starter',
    keywords: 'One keyword, two keywords',
    siteUrl: `https://yourdomainhere.com`,
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-typescript',
    'gatsby-transformer-remark',
    'gatsby-image',
    'gatsby-plugin-emotion',
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-mdx`,
      options: {
        decks: [],
        defaultLayouts: {
          default: require.resolve('./src/components/postLayout.tsx'),
        },
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-prismjs',
            options: {
              classPrefix: 'language-',
              inlineCodeMarker: {
                tsx: 'tsx',
              },
              aliases: {},
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/posts`,
        ignore: ['**/.tsx*'],
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        // exclude: ["/category/*", `/path/to/page`],
        // query: gql`
        //   {
        //     site {
        //       siteMetadata {
        //         siteUrl
        //       }
        //     }

        //     allSitePage {
        //       edges {
        //         node {
        //           path
        //         }
        //       }
        //     }
        // }`
      }
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: "Gatsby-TS-MDX-PrismJs-Starter",
    //     short_name: 'Gatsby-Starter',
    //     start_url: '/',
    //     background_color: '#663399',
    //     theme_color: '#663399',
    //     display: 'minimal-ui',
    // icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
    // },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
  ],
};
