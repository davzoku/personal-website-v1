import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
//import colors from "styles/colors"
import { Link, graphql } from "gatsby"
//import Button from "components/_ui/Button"
import Layout from "components/Layout"
import dimensions from "styles/dimensions"
import { MDXRenderer } from "gatsby-plugin-mdx"
import DefaultMdxComponentsProvider from "components/mdx/DefaultProvider"
import SeoHelmet from "components/SeoHelmet"
import PreviousNext from "components/_ui/PreviousNext"
//import PostTime from "components/_ui/PostTime"
import Share from "components/_ui/Share"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import kebabCase from "lodash/kebabCase"

// const BookHeroContainer = styled("div")`
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

const BookMetaContainer = styled("div")`
  max-width: ${dimensions.maxwidthTablet}px;
  margin: 0 auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: space-between;

  h6 {
    padding: 0.5rem 0;
  }

  a {
    text-decoration: none;
    color: var(--color-primary, #73abff);
  }
  a:hover {
    text-decoration: none;
    color: var(--color-primaryOffset, #3672f8);
  }

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    flex-direction: row;
  }
`

const BookMetaSection = styled("div")`
  width: 100%;
  padding: 1rem;

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    width: 50%;
  }
`

const BookBody = styled("div")`
  max-width: ${dimensions.maxwidthTablet}px;
  padding: 1rem;
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

// const Bookslink = styled(Link)`
//   margin-top: 3em;
//   display: block;
//   text-align: center;
// `

const Book = ({ book, meta, prev, next }) => {
  const image = getImage(book.frontmatter.cover)
  const autoGenDesc = `Thoughts and Reflections on ${book.frontmatter.author}'s ${book.frontmatter.title}`
  let readingStatusEmoji = "📕"

  // emoji logic
  switch (book.frontmatter.readingStatus) {
    case "In Progress":
      readingStatusEmoji = "📖"
      break
  }

  let growthStageEmoji = "🌱"

  // Growth stage emoji logic
  switch (book.frontmatter.growthStage) {
    case "Evergreen":
      growthStageEmoji = "🌳"
      break
    case "Budding":
      growthStageEmoji = "🌿"
      break
  }

  return (
    <>
      <SeoHelmet />
      <Helmet
        title={`${book.frontmatter.title}`}
        titleTemplate={`%s | ${meta.author}`}
        meta={[
          {
            name: `description`,
            content: `${autoGenDesc}`,
          },
          {
            property: `og:title`,
            content: `${book.frontmatter.title}`,
          },
          {
            property: `og:description`,
            content: `${autoGenDesc}`,
          },
          {
            property: `og:image`,
            content:
              meta.siteUrl +
              `${book.frontmatter.cover.childImageSharp.gatsbyImageData.images.fallback.src}`,
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
            content: `${book.frontmatter.title}`,
          },
          {
            name: `twitter:description`,
            content: `${autoGenDesc}`,
          },
          {
            property: `twitter:image`,
            content:
              meta.siteUrl +
              `${book.frontmatter.cover.childImageSharp.gatsbyImageData.images.fallback.src}`,
          },
        ].concat(meta)}
      />
      <Layout>
        <BookMetaContainer>
          <BookMetaSection>
            <GatsbyImage image={image} alt="cover" />
          </BookMetaSection>
          <BookMetaSection>
            <h1>{book.frontmatter.title}</h1>
            <h2>{book.frontmatter.subtitle}</h2>
            <h3>by {book.frontmatter.author}</h3>
            <h6>
              Read Status: {book.frontmatter.readingStatus} {readingStatusEmoji}
            </h6>
            <h6>Last tended {book.frontmatter.updated}</h6>
            <h6>Planted {book.frontmatter.startDate}</h6>
            <h6>
              {book.frontmatter.growthStage} {growthStageEmoji}
            </h6>
            <h6>
              <>Tags: </>
              {book.frontmatter.tags.slice(0, 3).map((tag, i) => {
                return (
                  <span>
                    <Link to={`/library/tags/${kebabCase(tag)}`}>
                      {tag.toUpperCase()}
                    </Link>
                    {book.frontmatter.tags.slice(0, 3).length === i + 1
                      ? ``
                      : `, `}
                  </span>
                )
              })}
            </h6>
            <h6>
              {book.timeToRead} min read {book.timeToRead > 5 ? "☕️" : "⚡️"}
            </h6>
          </BookMetaSection>
        </BookMetaContainer>
        <BookBody>
          <DefaultMdxComponentsProvider>
            <MDXRenderer>{book.body}</MDXRenderer>
          </DefaultMdxComponentsProvider>
        </BookBody>
        <Share
          url={`${meta.siteUrl}/${book.frontmatter.slug}`}
          title={book.frontmatter.title}
          twitterHandle={meta.twitterUsername}
        />
        <PreviousNext
          prevSlug={prev && `${prev.frontmatter.slug}`}
          prevTitle={prev && prev.frontmatter.title}
          nextSlug={next && `${next.frontmatter.slug}`}
          nextTitle={next && next.frontmatter.title}
        />
      </Layout>
    </>
  )
}

export default function BookPage({
  data: { site, mdx },
  pageContext: { prevPage, nextPage },
}) {
  return (
    <Book book={mdx} meta={site.siteMetadata} prev={prevPage} next={nextPage} />
  )
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
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
        subtitle
        slug
        tags
        type
        author
        growthStage
        readingStatus
        updated(fromNow: true)
        startDate(fromNow: true)
        cover {
          id
          childImageSharp {
            gatsbyImageData(
              width: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
      }
      body
      timeToRead
    }
  }
`
