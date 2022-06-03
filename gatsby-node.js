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
            frontmatter {
              title
              slug
            }
          }
        }
      }

      booksQuery: allMdx(
        filter: {
          frontmatter: { published: { eq: true }, type: { eq: "Book" } }
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
            frontmatter {
              slug
              title
            }
          }
        }
      }

      projectTagsQuery: allMdx(
        filter: {
          frontmatter: { published: { eq: true }, type: { eq: "Project" } }
        }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }

      noteTagsQuery: allMdx(
        filter: {
          frontmatter: { published: { eq: true }, type: { eq: "Note" } }
        }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }

      bookTagsQuery: allMdx(
        filter: {
          frontmatter: { published: { eq: true }, type: { eq: "Note" } }
        }
      ) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `).then(({ data, errors }) => {
    if (errors) {
      return Promise.reject(errors)
    }

    const pageRedirects = (node) => {
      if (node.frontmatter.redirects) {
        node.frontmatter.redirects.forEach((fromPath) => {
          createRedirect({
            fromPath,
            toPath: `/${node.frontmatter.slug}`,
            redirectInBrowser: true,
            isPermanent: true,
          })
        })
      }
    }

    const projectTemplate = require.resolve("./src/templates/project.tsx")
    const noteTemplate = require.resolve("./src/templates/note.tsx")
    const bookTemplate = require.resolve("./src/templates/book.tsx")
    const tagsListTemplate = require.resolve("./src/templates/tagsList.tsx")
    const projectTagsTemplate = require.resolve(
      "./src/templates/projectTags.tsx"
    )
    const noteTagsTemplate = require.resolve("./src/templates/noteTags.tsx")
    const bookTagsTemplate = require.resolve("./src/templates/bookTags.tsx")

    data.projectsQuery.edges.forEach(({ node }, i) => {
      const { edges } = data.projectsQuery
      const prevPage = i === 0 ? null : edges[i - 1].node
      const nextPage = i === edges.length - 1 ? null : edges[i + 1].node
      pageRedirects(node)
      createPage({
        path: `/${node.frontmatter.slug}`,
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
      pageRedirects(node)
      createPage({
        path: `/${node.frontmatter.slug}`,
        component: noteTemplate,
        context: {
          id: node.id,
          prevPage,
          nextPage,
        },
      })
    })

    data.booksQuery.edges.forEach(({ node }, i) => {
      const { edges } = data.booksQuery
      const prevPage = i === 0 ? null : edges[i - 1].node
      const nextPage = i === edges.length - 1 ? null : edges[i + 1].node
      pageRedirects(node)
      createPage({
        path: `/${node.frontmatter.slug}`,
        component: bookTemplate,
        context: {
          id: node.id,
          prevPage,
          nextPage,
        },
      })
    })

    data.projectTagsQuery.group.forEach((tag) => {
      createPage({
        path: `projects/tags/${_.kebabCase(tag.fieldValue)}`,
        component: projectTagsTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })

    data.noteTagsQuery.group.forEach((tag) => {
      createPage({
        path: `garden/tags/${_.kebabCase(tag.fieldValue)}`,
        component: noteTagsTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })

    data.bookTagsQuery.group.forEach((tag) => {
      createPage({
        path: `library/tags/${_.kebabCase(tag.fieldValue)}`,
        component: bookTagsTemplate,
        context: {
          tag: tag.fieldValue,
        },
      })
    })

    createPage({
      path: `projects/tags`,
      component: tagsListTemplate,
      context: {
        prefix: `projects`,
        type: `Project`,
      },
    })

    createPage({
      path: `garden/tags`,
      component: tagsListTemplate,
      context: {
        prefix: `garden`,
        type: `Note`,
      },
    })

    createPage({
      path: `library/tags`,
      component: tagsListTemplate,
      context: {
        prefix: `library`,
        type: `Book`,
      },
    })
  })
}
exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        "@components": path.resolve(__dirname, "src/components"),
        "@images": path.resolve(__dirname, "src/images"),
        "@styles": path.resolve(__dirname, "src/styles"),
      }
    },
    watchOptions: {
      aggregateTimeout: 200,
      poll: 1000,
    },
  })
}
