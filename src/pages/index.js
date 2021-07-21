import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
//import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Button from "components/_ui/Button"
import About from "components/About"
import Layout from "components/Layout"
import ProjectCardMdx from "components/ProjectCardMdx"
import NoteCardMdx from "components/NoteCardMdx"
import SeoHelmet from "components/SeoHelmet"
import config from "../../config/website"

const Hero = styled("div")`
  padding-top: 2.5em;
  padding-bottom: 3em;
  margin-bottom: 6em;
  max-width: 830px;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 3em;
  }

  h1 {
    margin-bottom: 1em;

    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;

      &:hover {
        cursor: pointer;
        transition: all 100ms ease-in-out;
      }
    }
  }
`

const Section = styled("div")`
  margin-bottom: 5em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
  h3,
  h5 {
    a {
      text-decoration: none;
      transition: all 100ms ease-in-out;
      color: var(--color-text);

      &:hover {
        color: var(--color-primary, #73abff);
        cursor: pointer;
        transition: all 100ms ease-in-out;
      }
    }
  }
`

const ProjectSection = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 1.5rem;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
  }
`

const GardenSection = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(4, 1fr);
  gap: 1.5rem;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: repeat(2, 1fr);
    gap: 2rem;
  }
`

const ActionLink = styled(Link)`
  margin-top: 1em;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-text, #16161a);
  transition: all 150ms ease-in-out;
  margin-left: auto;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin: 1em auto;
  }

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }

  &:hover {
    color: var(--color-primary, #73abff);
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`

const RenderBody = ({ projects, notes, meta }) => (
  <>
    <SeoHelmet />
    <Helmet
      title={meta.title}
      titleTemplate={`%s`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: meta.title,
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
    <Hero>
      <h1>
        Hello, I'm Walter Teng. 👋🏻 <br />I help to transform and develop digital
        experiences.
      </h1>
      <a
        href="mailto:walter.tengkw@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button>Let's work together</Button>
      </a>
    </Hero>
    <Section>
      <h3>About Me</h3>
      <About />
    </Section>
    <Section>
      <h3>
        <a href="/projects">Featured Projects</a>
      </h3>
      <h5>{config.projectDesc}</h5>
      <ProjectSection>
        {projects.map((project, i) => (
          <ProjectCardMdx key={i} data={project.node.frontmatter} />
        ))}
      </ProjectSection>

      <ActionLink to={"/projects"}>
        All projects <span>&#8594;</span>
      </ActionLink>
    </Section>

    <Section>
      <h3>
        <a href="/garden">The Digital Garden</a>
      </h3>
      <h5>{config.gardenDesc}</h5>
      <GardenSection>
        {notes.map((note, i) => (
          <NoteCardMdx key={i} data={note.node.frontmatter} />
        ))}
      </GardenSection>

      <ActionLink to={"/garden"}>
        Visit the Garden <span>&#8594;</span>
      </ActionLink>
    </Section>
  </>
)

export default ({ data }) => {
  //Required check for no data being returned
  const projects = data.projectQuery.edges
  const notes = data.noteQuery.edges
  const meta = data.site.siteMetadata

  if (!projects || !notes) return null

  return (
    <Layout>
      <RenderBody projects={projects} notes={notes} meta={meta} />
    </Layout>
  )
}

RenderBody.propTypes = {
  notes: PropTypes.array.isRequired,
  projects: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    projectQuery: allMdx(
      limit: 4
      filter: {
        frontmatter: {
          published: { eq: true }
          featured: { eq: true }
          type: { eq: "Project" }
        }
      }
      sort: { order: DESC, fields: frontmatter___startDate }
    ) {
      edges {
        node {
          frontmatter {
            description
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
    noteQuery: allMdx(
      limit: 4
      filter: { frontmatter: { published: { eq: true }, type: { eq: "Note" } } }
      sort: { order: DESC, fields: frontmatter___startDate }
    ) {
      edges {
        node {
          frontmatter {
            description
            title
            slug
            tags
            growthStage
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
