const path = require("path")
const _ = require("lodash")

// graphql function doesn't throw an error so we have to check to check for the result.errors to throw manually
// const wrapper = (promise) =>
//   promise.then((result) => {
//     if (result.errors) {
//       throw result.errors
//     }
//     return result
//   })

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect, createPage } = actions

  // const result = await wrapper(
  //   graphql(`
  return graphql(`
    query {
      projectsQuery: allMdx(
        filter: {
          frontmatter: { type: { eq: "Project" }, published: { ne: false } }
        }
        sort: { order: DESC, fields: frontmatter___updated }
      ) {
        edges {
          node {
            id
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
            excerpt(pruneLength: 250)
            frontmatter {
              slug
            }
          }
        }
      }

      notesQuery: allMdx(
        filter: {
          frontmatter: { type: { eq: "Note" }, published: { ne: false } }
        }
        sort: { order: DESC, fields: frontmatter___updated }
      ) {
        edges {
          node {
            id
            parent {
              ... on File {
                name
                sourceInstanceName
              }
            }
            excerpt(pruneLength: 250)
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    // const pageRedirects = (node) => {
    //   if (node.fields.redirects) {
    //     node.fields.redirects.forEach((fromPath) => {
    //       createRedirect({
    //         fromPath,
    //         toPath: node.fields.slug,
    //         redirectInBrowser: true,
    //         isPermanent: true,
    //       })
    //     })
    //   }
    // }

    const projectTemplate = require.resolve("./src/templates/project.jsx")
    const noteTemplate = require.resolve("./src/templates/note.jsx")

    data.projectsQuery.edges.forEach(({ node }, i) => {
      const { edges } = data.projectsQuery
      const prevPage = i === 0 ? null : edges[i - 1].node
      const nextPage = i === edges.length - 1 ? null : edges[i + 1].node
      //pageRedirects(node)
      createPage({
        path: `/projects/${node.frontmatter.slug}`,
        component: projectTemplate,
        context: {
          id: node.id,
          prevPage,
          nextPage,
        },
      })
    })

    data.notesQuery.edges.forEach(({ node }, i) => {
      const { edges } = data.notesQuery
      const prevPage = i === 0 ? null : edges[i - 1].node
      const nextPage = i === edges.length - 1 ? null : edges[i + 1].node
      //pageRedirects(node)
      createPage({
        path: `/garden/${node.frontmatter.slug}`,
        component: noteTemplate,
        context: {
          id: node.id,
          prevPage,
          nextPage,
        },
      })
    })
  })
}

// exports.onCreateWebpackConfig = ({ actions }) => {
//   actions.setWebpackConfig({
//     resolve: {
//       modules: [path.resolve(__dirname, "src"), "node_modules"],
//       alias: {
//         "react-dom": "@hot-loader/react-dom",
//         $components: path.resolve(__dirname, "src/components"),
//       },
//     },
//   })
// }

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions

//   if (
//     node.internal.type === `Mdx` &&
//     !_.get(node, "frontmatter.type", []).includes("note")
//   ) {
//     const parent = getNode(node.parent)
//     if (_.isUndefined(parent.name)) {
//       return
//     }
//     const titleSlugged = _.join(_.drop(parent.name.split("-"), 3), "-")
//     const slug =
//       parent.sourceInstanceName === "legacy"
//         ? `notes/${node.frontmatter.updated
//             .split("T")[0]
//             .replace(/-/g, "/")}/${titleSlugged}`
//         : node.frontmatter.slug || titleSlugged

//     createNodeField({
//       name: "id",
//       node,
//       value: node.id,
//     })

//     createNodeField({
//       name: "published",
//       node,
//       value: node.frontmatter.published,
//     })

//     createNodeField({
//       name: "title",
//       node,
//       value: node.frontmatter.title,
//     })

//     createNodeField({
//       name: "subtitle",
//       node,
//       value: node.frontmatter.subtitle,
//     })

//     createNodeField({
//       name: "description",
//       node,
//       value: node.frontmatter.description,
//     })

//     createNodeField({
//       name: "slug",
//       node,
//       value: slug,
//     })

//     createNodeField({
//       name: "url",
//       node,
//       value: node.frontmatter.url,
//     })

//     createNodeField({
//       name: "updated",
//       node,
//       value: node.frontmatter.updated
//         ? node.frontmatter.updated.split(" ")[0]
//         : "",
//     })

//     createNodeField({
//       name: "cover",
//       node,
//       value: node.frontmatter.cover,
//     })

//     createNodeField({
//       name: "type",
//       node,
//       value: node.frontmatter.type || [],
//     })

//     createNodeField({
//       name: "topics",
//       node,
//       value: node.frontmatter.topics || [],
//     })

//     createNodeField({
//       name: "redirects",
//       node,
//       value: node.frontmatter.redirects,
//     })

//     createNodeField({
//       name: "redirectTo",
//       node,
//       value: node.frontmatter.redirectTo,
//     })

//     createNodeField({
//       name: "isPost",
//       node,
//       value: true,
//     })

//     createNodeField({
//       name: "growthStage",
//       node,
//       value: node.frontmatter.growthStage,
//     })
//     // createNodeField({
//     //   name: "featured",
//     //   node,
//     //   value: node.frontmatter.featured,
//     // })
//   }
// }
