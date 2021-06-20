import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import ProjectCard from "components/ProjectCard"

const ProjectTitle = styled("h1")`
  margin-bottom: 1em;
`

const Projects = ({ projects, meta }) => (
  <>
    <Helmet
      title={`Projects`}
      titleTemplate={`%s | ${meta.author}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Projects`,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:image`,
          content: meta.siteUrl + meta.image,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: meta.twitterUsername,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
        {
          property: `twitter:image`,
          content: meta.siteUrl + meta.image,
        },
      ].concat(meta)}
    />
    <Layout>
      <ProjectTitle>Projects</ProjectTitle>
      <>
        {projects.map((project, i) => (
          <ProjectCard
            key={i}
            category={project.node.data.project_category.raw}
            title={project.node.data.project_title.raw}
            description={project.node.data.project_preview_description.raw}
            thumbnail={project.node.data.project_preview_thumbnail}
            uid={project.node.uid}
          />
        ))}
      </>
    </Layout>
  </>
)

export default ({ data }) => {
  const projects = data.allPrismicProject.edges
  const meta = data.site.siteMetadata
  if (!projects) return null

  return <Projects projects={projects} meta={meta} />
}

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
}

export const query = graphql`
  {
    allPrismicProject(sort: { order: DESC, fields: data___project_post_date }) {
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
              copyright
              url
              thumbnails
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
    site {
      siteMetadata {
        title
        description
        author
        image
        twitterUsername
        siteUrl
      }
    }
  }
`
