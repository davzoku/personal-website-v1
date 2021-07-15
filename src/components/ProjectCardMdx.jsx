import React from "react"
//import Moment from "react-moment"
import { Link } from "gatsby"
//import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
//import colors from "styles/colors"
import PropTypes from "prop-types"
//import { StaticImage } from "gatsby-plugin-image"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectCardContainer = styled(Link)`
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

    .ProjectCardAction {
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

// const PostMetas = styled("div")`
//   display: flex;
//   align-items: center;
//   margin: 1.5em 0;
//   padding: 0 2rem;
//   justify-content: flex-start;
//   font-size: 0.85em;
//   color: var(--color-text, #16161a);
// `

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

const ProjectCardAction = styled("div")`
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

const ProjectCardMdx = ({ data }) => {
  const image = getImage(data.cover)

  return (
    <ProjectCardContainer className="ProjectCard" to={`/projects/${data.slug}`}>
      <ImageContainer>
        <GatsbyImage image={image} alt="cover" />
      </ImageContainer>
      <PostCategory>{data.category}</PostCategory>
      <PostTitle>{data.title}</PostTitle>
      <PostDescription>{data.description}</PostDescription>
      <ProjectCardAction className="ProjectCardAction">
        Read more <span>&#8594;</span>
      </ProjectCardAction>
    </ProjectCardContainer>
  )
}

export default ProjectCardMdx

ProjectCardMdx.propTypes = {
  data: PropTypes.object.isRequired,
}
