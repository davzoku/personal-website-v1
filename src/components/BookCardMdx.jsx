import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const BookCardContainer = styled("div")`
  border-radius: 0.3rem;
  color: var(--color-text, #16161a);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;

  a {
    text-decoration: none;
    color: var(--color-primary, #73abff);
  }

  a:hover {
    color: var(--color-text, #16161a);
  }

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transform: scale3d(1.02, 1.02, 1.02);
    transition: all 150ms ease-in-out;
  }
`
const ImageContainer = styled("div")`
  img {
    border-radius: 0.3rem;
    min-height: 100%;
    width: 100%;
  }
`

const PostTitle = styled("h3")`
  margin: 0;
  margin-top: 0.5em;
  padding: 0 2rem;
`

const PostDescription = styled("div")`
  margin: 0.25rem;
  color: var(--color-text, #73abff);
`

const BookCardMdx = ({ data }) => {
  const image = getImage(data.cover)
  const bookUrl = `/library/${data.slug}`

  let readingStatusEmoji = "📕"

  // emoji logic
  switch (data.readingStatus) {
    case "In Progress":
      readingStatusEmoji = "📖"
      break
  }
  return (
    <BookCardContainer>
      <Link to={bookUrl}>
        <ImageContainer>
          <GatsbyImage image={image} alt="cover" />
        </ImageContainer>
        <PostTitle>{data.title}</PostTitle>
        <PostDescription>{data.author}</PostDescription>
        <PostDescription>
          {data.readingStatus} {readingStatusEmoji}
        </PostDescription>
      </Link>
    </BookCardContainer>
  )
}

export default BookCardMdx

BookCardMdx.propTypes = {
  data: PropTypes.object.isRequired,
}
