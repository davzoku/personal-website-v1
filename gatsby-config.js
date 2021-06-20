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
    linkResolver: () => doc => linkResolver(doc),
    schemas: {
      homepage: homePageSchema,
      post: postSchema,
      project: projectSchema,
    },
  },
}

module.exports = {
  siteMetadata: {
    title: `Walter Teng`,
    description: `Walter Teng is a full stack developer who specializes in transforming and developing digital experiences.`,
    author: `Walter Teng`,
    siteUrl: "https://walterteng.com", // No trailing slash allowed!
    image: "/og.png",
    twitterUsername: "@davzoku",
  },
  plugins: [
    gastbySourcePrismicConfig,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-image`,
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
        name: `gatsby-prismic-starter-prist`,
        short_name: `prist`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    // https://www.gatsbyjs.org/packages/gatsby-plugin-google-analytics/
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-43031692-9",
        head: true,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
