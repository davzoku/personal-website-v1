import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import NoteCardMdx from "components/NoteCardMdx"
import SeoHelmet from "components/SeoHelmet"
import dimensions from "styles/dimensions"
import config from "../../config/website"

const NoteTitle = styled("h1")``

const NoteSection = styled("div")`
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

const Notes = ({ notes, meta }) => (
  <>
    <SeoHelmet />
    <Helmet
      title={`Notes`}
      titleTemplate={`%s | ${meta.author}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Notes`,
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
      <NoteTitle>The Digital Garden</NoteTitle>
      <h5>{config.gardenDesc}</h5>
      <NoteSection>
        {notes.map((note, i) => (
          <NoteCardMdx key={i} data={note.node.frontmatter} />
        ))}
      </NoteSection>
    </Layout>
  </>
)

export default ({ data }) => {
  const notes = data.allMdx.edges
  const meta = data.site.siteMetadata
  if (!notes) return null

  return <Notes notes={notes} meta={meta} />
}

Notes.propTypes = {
  notes: PropTypes.array.isRequired,
}

export const query = graphql`
  {
    allMdx(
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
