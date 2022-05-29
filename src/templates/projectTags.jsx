import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import ProjectCardMdx from "components/ProjectCardMdx"
import SeoHelmet from "components/SeoHelmet"
import dimensions from "styles/dimensions"
import config from "../../config/website"

const ProjectTitle = styled("h1")``

const ProjectSection = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1.5rem;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
  }
`

const Projects = ({ pageContext, data }) => {
  const { tag } = pageContext
  const projects = data.allMdx.edges
  const meta = data.site.siteMetadata

  return (
    <>
      <SeoHelmet />
      <Helmet
        title={`${tag}`}
        titleTemplate={`%s Projects | ${meta.author}`}
        meta={[
          {
            name: `description`,
            content: meta.description,
          },
          {
            property: `og:title`,
            content: `${tag}`,
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
        <ProjectTitle>{tag}</ProjectTitle>
        <h5>Projects related to {tag}</h5>
        <ProjectSection>
          {projects.map((project, i) => (
            <ProjectCardMdx key={i} data={project.node.frontmatter} />
          ))}
        </ProjectSection>
      </Layout>
    </>
  )
}

export default Projects

Projects.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  projects: PropTypes.array.isRequired,
}

export const query = graphql`
  query ($tag: String) {
    allMdx(
      filter: {
        frontmatter: {
          published: { eq: true }
          type: { eq: "Project" }
          tags: { in: [$tag] }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            description
            tags
            title
            techStack
            slug
            category
            githubLink
            extLink
            cover {
              id
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
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