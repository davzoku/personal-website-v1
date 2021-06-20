const path = require("path")

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
const wrapper = promise =>
  promise.then(result => {
    if (result.errors) {
      throw result.errors
    }
    return result
  })

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await wrapper(
    graphql(`
      {
        allPrismicProject {
          edges {
            node {
              uid
              data {
                project_title {
                  html
                  text
                  raw
                }
                project_preview_description {
                  html
                  text
                  raw
                }
                project_preview_thumbnail {
                  alt
                  url
                }
                project_category {
                  html
                  text
                  raw
                }
                project_post_date
              }
            }
          }
        }
        allPrismicPost {
          edges {
            node {
              uid
              data {
                post_title {
                  html
                  text
                  raw
                }
                post_hero_image {
                  alt
                  copyright
                  url
                  thumbnails
                }
                post_hero_annotation {
                  html
                  text
                  raw
                }
                post_date
                post_category {
                  html
                  text
                  raw
                }
                post_body {
                  html
                  text
                  raw
                }
                post_preview_description {
                  html
                  text
                  raw
                }
                post_author
              }
            }
          }
        }
      }
    `)
  )

  const projectsList = result.data.allPrismicProject.edges
  const postsList = result.data.allPrismicPost.edges

  const projectTemplate = require.resolve("./src/templates/project.jsx")
  const postTemplate = require.resolve("./src/templates/post.jsx")

  projectsList.forEach(edge => {
    // The uid you assigned in Prismic is the slug!
    createPage({
      type: "Project",
      match: "/projects/:uid",
      path: `/projects/${edge.node.uid}`,
      component: projectTemplate,
      context: {
        // Pass the unique ID (uid) through context so the template can filter by it
        uid: edge.node.uid,
      },
    })
  })

  postsList.forEach(edge => {
    createPage({
      type: "Project",
      match: "/blog/:uid",
      path: `/blog/${edge.node.uid}`,
      component: postTemplate,
      context: {
        uid: edge.node.uid,
      },
    })
  })
}
