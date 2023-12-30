require("dotenv").config();
const config = require("./config/website");

const siteMetadata = {
  title: config.siteTitle,
  description: config.siteDescription,
  author: config.author,
  siteUrl: config.siteUrl, // No trailing slash allowed!
  image: config.ogImage,
  twitterUsername: config.twitterHandle,
}

module.exports = {
  siteMetadata: siteMetadata,
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-remove-trailing-slashes`,
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/projects`,
        name: "Projects",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/notes`,
        name: "Notes",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/books`,
        name: "Books",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md", ".markdown"],
        gatsbyRemarkPlugins: [
          `gatsby-remark-embedder`,
          `gatsby-plugin-twitter`,
          `gatsby-remark-autolink-headers`,
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              wrapperStyle:
                "border-radius: 4px; max-width: 100%; margin-bottom: 0;",
              linkImagesToOriginal: false,
              quality: 100,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: true,
              ordered: false,
              fromHeading: 1,
              toHeading: 6,
              className: "toc",
            },
          },
        ],
        plugins: [
          `gatsby-remark-images`,
          `gatsby-remark-embedder`,
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-table-of-contents`,
        ],
      },
    },
    `gatsby-plugin-twitter`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: `/?utm_source=homescreen`,
        background_color: config.themeColor,
        theme_color: config.backgroundColor,
        display: `standalone`,
        icon: `src/images/pwa-maskable-icon.png`, // This path is relative to the root of the site.
        include_favicon: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          config.googleAnalyticsID,
        ],
        pluginConfig: {
          head: true,
        },
      },
    },    
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    {
      resolve: `gatsby-plugin-webmention`,
      options: {
        username: "walterteng.com", // webmention.io username
        identity: {
          github: "davzoku",
          twitter: "davzoku", // no @
        },
        mentions: true,
        pingbacks: true,
        domain: "walterteng.com",
        token: process.env.WEBMENTIONS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-theme-switcher`,
      options: {
        defaultDarkTheme: "theme-merlion",
        defaultLightTheme: "theme-night-safari",
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.nodes.map(node => {
                return Object.assign({}, node.frontmatter, {
                  description: node.frontmatter.description,
                  date: node.frontmatter.updated,
                  url: site.siteMetadata.siteUrl + '/' + node.frontmatter.slug,
                  guid: site.siteMetadata.siteUrl + '/' + node.frontmatter.slug,
                })
              })
            },
            query: `
              {
                allMdx(
                  filter: {frontmatter: {published: {eq: true}}}
                  sort: {order: DESC, fields: frontmatter___updated}
                ) {
                  nodes {
                    frontmatter {
                      description
                      title
                      startDate
                      slug
                      updated
                    }
                  }
                }
              }
            `,
            output: '/rss.xml',
            title: `walterteng.com Feed`,
          },
        ],
      },
    },
  ],
}
