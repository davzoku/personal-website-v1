import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import NoteCardMdx from "components/NoteCardMdx"
import SeoHelmet from "components/SeoHelmet"
import dimensions from "styles/dimensions"

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

const Notes = ({ pageContext, data }) => {
  const { tag } = pageContext
  const notes = data.allMdx.edges
  const meta = data.site.siteMetadata

  return (
    <>
      <SeoHelmet />
      <Helmet
        title={`${tag}`}
        titleTemplate={`%s Notes | ${meta.author}`}
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
        <NoteTitle>{tag}</NoteTitle>
        <h5>Notes related to {tag}</h5>
        <NoteSection>
          {notes.map((note, i) => (
            <NoteCardMdx key={i} data={note.node.frontmatter} />
          ))}
        </NoteSection>
      </Layout>
    </>
  )
}

export default Notes

Notes.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  notes: PropTypes.array.isRequired,
}

export const query = graphql`
  query ($tag: String) {
    allMdx(
      filter: {
        frontmatter: {
          published: { eq: true }
          type: { eq: "Note" }
          tags: { in: [$tag] }
        }
      }
      sort: { order: DESC, fields: frontmatter___updated }
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
