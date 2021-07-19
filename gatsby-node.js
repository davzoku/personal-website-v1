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
  const { createPage } = actions

  return graphql(`
    query {
      projectsQuery: allMdx(
        filter: {
          frontmatter: { published: { eq: true }, type: { eq: "Project" } }
        }
        sort: { order: DESC, fields: frontmatter___startDate }
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
              title
            }
          }
        }
      }

      notesQuery: allMdx(
        filter: {
          frontmatter: { published: { eq: true }, type: { eq: "Note" } }
        }
        sort: { order: DESC, fields: frontmatter___startDate }
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
              title
            }
          }
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    const projectTemplate = require.resolve("./src/templates/project.jsx")
    const noteTemplate = require.resolve("./src/templates/note.jsx")

    data.projectsQuery.edges.forEach(({ node }, i) => {
      const { edges } = data.projectsQuery
      const prevPage = i === 0 ? null : edges[i - 1].node
      const nextPage = i === edges.length - 1 ? null : edges[i + 1].node
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
