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
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: config.siteUrl,
        short_name: config.siteTitleShort,
        start_url: config.pathPrefix,
        background_color: config.themeColor,
        theme_color: config.backgroundColor,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
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
  ],
}
