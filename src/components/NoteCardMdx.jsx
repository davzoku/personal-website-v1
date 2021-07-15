import React from "react"
//import Moment from "react-moment"
import { Link } from "gatsby"
//import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
//import colors from "styles/colors"
import PropTypes from "prop-types"
//import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const NoteCardContainer = styled(Link)`
  background: var(--color-backgroundOffset, #ffffff);
  border: 1px solid var(--color-border, #f5f5ff);
  border-radius: 0.3rem;
  text-decoration: none;
  color: var(--color-text, #16161a);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  transition: all 150ms ease-in-out;

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;
    cursor: pointer;

    .NoteCardAction {
      color: var(--color-text, #16161a);
      transition: all 150ms ease-in-out;

      span {
        transform: translateX(0px);
        opacity: 1;
        transition: transform 150ms ease-in-out;
      }
    }
  }
`
const ImageContainer = styled("div")`
  max-height: 22rem;
  overflow: hidden;
  img {
    border-radius: 0.3rem;
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`

// const TextContainer = styled("div")`
//   display: flex;
//   justify-content: space-evenly;
//   flex-direction: column;
//   padding: 2rem;
// `

const PostCategory = styled("h6")`
  padding: 2rem 2rem 0 2rem;
  font-weight: 600;
  color: var(--color-primaryOffset, #3672f8);
`

const PostTitle = styled("h3")`
  margin: 0;
  margin-top: 0.5em;
  padding: 0 2rem;
`

const PostMetas = styled("div")`
  display: flex;
  align-items: center;
  margin: 1.5em 0;
  padding: 0 2rem;
  justify-content: flex-start;
  font-size: 0.85em;
  color: var(--color-text, #16161a);
`

const Tag = styled("div")`
  text-align: center;
  padding: 0.5rem;
  margin-right: 1.5rem;
  background-color: var(--color-background);
  border-radius: 0.5rem;
`

// const PostAuthor = styled("div")`
//   margin: 0;
// `

// const PostDate = styled("div")`
//   margin: 0;
// `

const PostDescription = styled("div")`
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 0 2rem;
  p:last-of-type {
    margin: 0;
  }
`

const NoteCardAction = styled("div")`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  padding: 0 2rem 2rem 2rem;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-primary, #73abff);
  transition: all 150ms ease-in-out;

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
`

const NoteCardMdx = ({ data }) => {
  const image = getImage(data.cover)
  let growthStageEmoji = "🌱"

  // Growth stage emoji logic
  switch (data.growthStage) {
    case "Evergreen":
      growthStageEmoji = "🌳"
      break
    case "Budding":
      growthStageEmoji = "🌿"
      break
  }
  return (
    <NoteCardContainer className="NoteCard" to={`/garden/${data.slug}`}>
      <ImageContainer>
        <GatsbyImage image={image} alt="cover" />
      </ImageContainer>
      <PostCategory>
        {data.growthStage} {growthStageEmoji}
      </PostCategory>
      <PostTitle>{data.title}</PostTitle>
      <PostDescription>{data.description}</PostDescription>
      <PostMetas>
        <>
          {data.tags.slice(0, 3).map((tag) => (
            <Tag>{tag.toUpperCase()}</Tag>
          ))}
        </>
      </PostMetas>
      <NoteCardAction className="NoteCardAction">
        Read more <span>&#8594;</span>
      </NoteCardAction>
    </NoteCardContainer>
  )
}

export default NoteCardMdx

NoteCardMdx.propTypes = {
  data: PropTypes.object.isRequired,
}
