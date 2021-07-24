import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
//import colors from "styles/colors"
import { graphql } from "gatsby"
//import Button from "components/_ui/Button"
import Layout from "components/Layout"
import dimensions from "styles/dimensions"
import { MDXRenderer } from "gatsby-plugin-mdx"
import DefaultMdxComponentsProvider from "components/mdx/DefaultProvider"
import SeoHelmet from "components/SeoHelmet"
import PreviousNext from "components/_ui/PreviousNext"
import PostTime from "components/_ui/PostTime"
import Share from "components/_ui/Share"

// const ProjectHeroContainer = styled("div")`
//   display: flex;
//   justify-content: center;
//   align-items: flex-end;
//   overflow: hidden;
//   position: relative;
//   margin-bottom: 3.5em;

//   img {
//     max-height: 100%;
//     min-width: 100%;
//     object-fit: cover;
//     vertical-align: bottom;
//   }
// `

const ProjectTitle = styled("div")`
  max-width: ${dimensions.maxwidthTablet}px;
  margin: 0 auto;
  text-align: center;
`

const ProjectBody = styled("div")`
  max-width: ${dimensions.maxwidthTablet}px;
  margin: 0 auto;

  a:not(.anchor) {
    font-weight: 600;
    color: var(--color-primary, #73abff);
    box-shadow: inset 0 -2px 0 0 var(--color-primary, #73abff);
    border-bottom: 1px solid var(--color-primary, #73abff);
    text-decoration: none;
    transition: all 150ms ease-in-out;
  }

  a:hover:not(.anchor) {
    color: var(--color-background, #ffffff);
    box-shadow: inset 0 -1.25em 0 0 var(--color-primary, #73abff);
    border-bottom-color: var(--color-primary, #73abff);
    outline: 0;
    text-decoration: none;
  }

  .block-img {
    margin-top: 3.5em;
    margin-bottom: 0.5em;

    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }

    a:hover {
      background: rgba(0, 0, 0, 0) !important;
    }
  }
`

// const Projectslink = styled(Link)`
//   margin-top: 3em;
//   display: block;
//   text-align: center;
// `

const Project = ({ project, meta, prev, next }) => {
  return (
    <>
      <SeoHelmet />
      <Helmet
        title={`${project.frontmatter.title}`}
        titleTemplate={`%s | ${meta.author}`}
        meta={[
          {
            name: `description`,
            content: `${project.frontmatter.description}`,
          },
          {
            property: `og:title`,
            content: `${project.frontmatter.title}`,
          },
          {
            property: `og:description`,
            content: `${project.frontmatter.description}`,
          },
          {
            property: `og:image`,
            content:
              meta.siteUrl +
              `${project.frontmatter.cover.childImageSharp.gatsbyImageData.images.fallback.src}`,
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
            content: `${project.frontmatter.title}`,
          },
          {
            name: `twitter:description`,
            content: `${project.frontmatter.description}`,
          },
          {
            property: `twitter:image`,
            content:
              meta.siteUrl +
              `${project.frontmatter.cover.childImageSharp.gatsbyImageData.images.fallback.src}`,
          },
        ].concat(meta)}
      />
      <Layout>
        <ProjectTitle>
          <h1>{project.frontmatter.title}</h1>
        </ProjectTitle>
        <PostTime
          timeToRead={project.timeToRead}
          updatedDate={project.frontmatter.updated}
        />
        <ProjectBody>
          <DefaultMdxComponentsProvider>
            <MDXRenderer>{project.body}</MDXRenderer>
          </DefaultMdxComponentsProvider>
        </ProjectBody>
        <Share
          url={`${meta.siteUrl}/projects/${project.frontmatter.slug}`}
          title={project.frontmatter.title}
          twitterHandle={meta.twitterUsername}
        />
        {/* <Projectslink to={"/projects"}>
          <Button className="Button--secondary">See other projects</Button>
        </Projectslink> */}
        <PreviousNext
          prevSlug={prev && `projects/${prev.frontmatter.slug}`}
          prevTitle={prev && prev.frontmatter.title}
          nextSlug={next && `projects/${next.frontmatter.slug}`}
          nextTitle={next && next.frontmatter.title}
        />
      </Layout>
    </>
  )
}

export default function ProjectPage({
  data: { site, mdx },
  pageContext: { prevPage, nextPage },
}) {
  return (
    <Project
      project={mdx}
      meta={site.siteMetadata}
      prev={prevPage}
      next={nextPage}
    />
  )
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
}

export const query = graphql`
  query ($id: String!) {
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
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        techStack
        type
        updated(formatString: "DD MMM YYYY")
        description
        startDate
        extLink
        cover {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      timeToRead
    }
  }
`
