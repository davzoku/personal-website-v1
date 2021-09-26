const config = require("./config/website")
require("dotenv").config()
const {
  prismicRepo,
  releaseID,
  accessToken,
} = require("./prismic-configuration")
const linkResolver = require("./src/utils/linkResolver")

const reponame = process.env.PRISMIC_REPO_NAME || prismicRepo
const apiKey = process.env.PRISMIC_API_KEY || accessToken
const prismicReleaseID = process.env.PRISMIC_RELEASE_ID || releaseID

const homePageSchema = require("./custom_types/homepage.json")
const postSchema = require("./custom_types/post.json")
const projectSchema = require("./custom_types/project.json")

const gastbySourcePrismicConfig = {
  resolve: "gatsby-source-prismic",
  options: {
    repositoryName: reponame,
    accessToken: apiKey,
    releaseID: prismicReleaseID,
    prismicToolbar: true,
    linkResolver: () => (doc) => linkResolver(doc),
    schemas: {
      homepage: homePageSchema,
      post: postSchema,
      project: projectSchema,
    },
  },
}

module.exports = {
  siteMetadata: {
    title: config.siteTitle,
    description: config.siteDescription,
    author: config.author,
    siteUrl: config.siteUrl, // No trailing slash allowed!
    image: config.ogImage,
    twitterUsername: config.twitterHandle,
  },
  plugins: [
    gastbySourcePrismicConfig,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-resolve-src`,
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
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/projects`,
        name: "Projects",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/content/notes`,
        name: "Notes",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
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
    "gatsby-plugin-twitter",
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleShort,
        start_url: config.pathPrefix,
        background_color: config.themeColor,
        theme_color: config.backgroundColor,
        display: `standalone`,
        icon: `src/images/pwa-maskable-icon.png`, // This path is relative to the root of the site.
        include_favicon: false,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalyticsID,
        head: true,
      },
    },
    `gatsby-plugin-offline`,
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
      resolve: "gatsby-plugin-theme-switcher",
      options: {
        defaultDarkTheme: "theme-merlion",
        defaultLightTheme: "theme-night-safari",
      },
    },
  ],
}
