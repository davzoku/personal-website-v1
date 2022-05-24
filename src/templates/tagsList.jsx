import React from "react"
import kebabCase from "lodash/kebabCase"
import Helmet from "react-helmet"
import { Link, graphql } from "gatsby"
import styled from "@emotion/styled"
import Layout from "components/Layout"
import SeoHelmet from "components/SeoHelmet"

const Title = styled("h1")``

const Section = styled("div")`
  list-style: none;
  line-height: 2rem;
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
`

const TagsList = ({ pageContext, data }) => {
  const { prefix } = pageContext
  const tags = data.allMdx.group
  const meta = data.site.siteMetadata

  return (
    <>
      <SeoHelmet />
      <Helmet
        title={`Tags`}
        titleTemplate={`%s | ${meta.author}`}
        meta={[
          {
            name: `description`,
            content: meta.description,
          },
          {
            property: `og:title`,
            content: `Tags`,
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
        <Title>Tags</Title>
        <Section>
          {tags.map((tag, i) => (
            <li key={tag.fieldValue}>
              <Link to={`/${prefix}/tags/${kebabCase(tag.fieldValue)}`}>
                {tag.fieldValue} ({tag.totalCount})
              </Link>
            </li>
          ))}
        </Section>
      </Layout>
    </>
  )
}

export default TagsList

export const query = graphql`
  query ($type: String) {
    allMdx(
      filter: { frontmatter: { published: { eq: true }, type: { eq: $type } } }
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
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
