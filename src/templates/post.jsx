import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import Moment from "react-moment"
import { graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import colors from "styles/colors"
import Layout from "components/Layout"

const PostHeroContainer = styled("div")`
  max-height: 500px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-bottom: 3em;

  img {
    width: 100%;
  }
`

const PostHeroAnnotation = styled("div")`
  padding-top: 0.25em;

  h6 {
    text-align: right;
    color: ${colors.grey600};
    font-weight: 400;
    font-size: 0.85rem;
  }

  a {
    color: var(--color-text, #16161a);
  }
`

const PostCategory = styled("div")`
  max-width: 550px;
  margin: 0 auto;
  text-align: center;
  font-weight: 600;
  color: ${colors.grey600};

  h5 {
    margin-top: 0;
    margin-bottom: 1em;
  }
`

const PostTitle = styled("div")`
  max-width: 550px;
  margin: 0 auto;
  text-align: center;

  h1 {
    margin-top: 0;
  }
`

const PostBody = styled("div")`
  max-width: 550px;
  margin: 0 auto;

  a {
    font-weight: 600;
    color: var(--color-primary, #73abff);
    box-shadow: inset 0 -2px 0 0 var(--color-primary, #73abff);
    border-bottom: 1px solid var(--color-primary, #73abff);
    text-decoration: none;
    transition: all 150ms ease-in-out;
  }

  a:hover {
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
      width: 100%;
    }
  }
`

const PostMetas = styled("div")`
  max-width: 550px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  margin-bottom: 2em;
  justify-content: space-between;
  font-size: 0.85em;
  color: ${colors.grey600};
`

const PostAuthor = styled("div")`
  margin: 0;
`

const PostDate = styled("div")`
  margin: 0;
`

const Post = ({ post, meta }) => {
  return (
    <>
      <Helmet
        title={`${post.data.post_title.text}`}
        titleTemplate={`%s | ${meta.author}`}
        meta={[
          {
            name: `description`,
            content: meta.description,
          },
          {
            property: `og:title`,
            content: `${post.data.post_title.text}`,
          },
          {
            property: `og:description`,
            content: `${post.data.post_preview_description.text}`,
          },
          {
            property: `og:image`,
            content: `${post.data.post_hero_image.url}`,
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
            content: `${post.data.post_title.text}`,
          },
          {
            name: `twitter:description`,
            content: `${post.data.post_preview_description.text}`,
          },
          {
            property: `twitter:image`,
            content: `${post.data.post_hero_image.url}`,
          },
        ].concat(meta)}
      />
      <Layout>
        <PostCategory>
          {RichText.render(post.data.post_category.raw)}
        </PostCategory>
        <PostTitle>{RichText.render(post.data.post_title.raw)}</PostTitle>
        <PostMetas>
          <PostAuthor>{post.data.post_author}</PostAuthor>
          <PostDate>
            <Moment format="MMMM D, YYYY">{post.data.post_date}</Moment>
          </PostDate>
        </PostMetas>
        {post.data.post_hero_image && (
          <PostHeroContainer>
            <img src={post.data.post_hero_image.url} alt="hero image" />
            <PostHeroAnnotation>
              {RichText.render(post.data.post_hero_annotation)}
            </PostHeroAnnotation>
          </PostHeroContainer>
        )}
        <PostBody>{RichText.render(post.data.post_body.raw)}</PostBody>
      </Layout>
    </>
  )
}

export default ({ data }) => {
  const postContent = data.allPrismicPost.edges[0].node
  const meta = data.site.siteMetadata
  return <Post post={postContent} meta={meta} />
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  query PostQuery($uid: String) {
    allPrismicPost(filter: { uid: { eq: $uid } }) {
      edges {
        node {
          uid
          data {
            post_title {
              html
              text
              raw
            }
            post_hero_image {
              alt
              copyright
              url
              thumbnails
            }
            post_hero_annotation {
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
            post_body {
              html
              text
              raw
            }
            post_author
            post_preview_description {
              html
              text
              raw
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
        twitterUsername
      }
    }
  }
`
