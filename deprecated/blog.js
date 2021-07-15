import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import PostCard from "components/PostCard"
import SeoHelmet from "components/SeoHelmet"

const BlogTitle = styled("h1")`
  margin-bottom: 1em;
`

const BlogGrid = styled("div")`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5em;

  @media (max-width: 1050px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: 1fr;
    grid-gap: 2.5em;
  }
`

const Blog = ({ posts, meta }) => (
  <>
    <SeoHelmet />
    <Helmet
      title={`Blog`}
      titleTemplate={`%s | ${meta.author}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: `Blog`,
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
      <BlogTitle>Blog</BlogTitle>
      <BlogGrid>
        {posts.map((post, i) => (
          <PostCard
            key={i}
            author={post.node.data.post_author}
            category={post.node.data.post_category.raw}
            title={post.node.data.post_title.raw}
            date={post.node.data.post_date}
            description={post.node.data.post_preview_description.raw}
            uid={post.node.uid}
          />
        ))}
      </BlogGrid>
    </Layout>
  </>
)

export default ({ data }) => {
  const posts = data.allPrismicPost.edges
  const meta = data.site.siteMetadata
  if (!posts) return null

  return <Blog posts={posts} meta={meta} />
}

Blog.propTypes = {
  posts: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    allPrismicPost(sort: { order: DESC, fields: data___post_date }) {
      edges {
        node {
          uid
          data {
            post_title {
              html
              text
              raw
            }
            post_date
            post_category {
              html
              text
              raw
            }
            post_preview_description {
              html
              text
              raw
            }
            post_author
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
