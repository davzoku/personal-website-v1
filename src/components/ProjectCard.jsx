import React from "react"
import { Link } from "gatsby"
import { RichText } from "prismic-reactjs"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
//import colors from "styles/colors"
import PropTypes from "prop-types"

const ProjectCardContainer = styled("div")`
  border: 1px solid var(--color-border, #f5f5ff);
  display: grid;
  grid-template-columns: 4fr 7fr;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  margin-bottom: 4em;
  transition: all 150ms ease-in-out;
  text-decoration: none;
  color: var(--color-text, #16161a);

  @media (max-width: 950px) {
    grid-template-columns: 4.5fr 7fr;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: 1fr;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    margin-bottom: 2em;
  }

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transition: all 150ms ease-in-out;

    .ProjectCardContent::before {
      opacity: 0.02;
      transition: all 150ms ease-in-out;
    }

    .ProjectCardImageContainer::before {
      opacity: 0.2;
      transition: all 150ms ease-in-out;
    }
  }
`

const ProjectCardContent = styled("div")`
  background: var(--color-backgroundOffset, #ffffff);
  padding: 4em 3em 2.25em 3em;
  position: relative;

  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: var(--color-primary, #73abff);
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }

  @media (max-width: 950px) {
    padding: 3.25em 2.5em 2em 2.5em;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-row: 2;
  }
`

const ProjectCardCategory = styled("h6")`
  font-weight: 600;
  color: var(--color-primaryOffset, #3672f8);
`

const ProjectCardTitle = styled("h3")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
`

const ProjectCardBlurb = styled("div")`
  margin-bottom: 0.5em;
  margin-top: 0.5em;
  margin-bottom: 5em;

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

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 2.5em;
  }
`

const ProjectCardAction = styled(Link)`
  font-weight: 600;
  text-decoration: none;
  color: var(--color-text, #16161a);
  transition: all 150ms ease-in-out;

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

const ProjectCardImageContainer = styled(Link)`
  background: var(--color-backgroundOffset, #ffffff);
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    max-height: 250px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    max-height: 300px;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
  }

  &:before {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: var(--color-primary, #73abff);
    mix-blend-mode: multiply;
    opacity: 0;
    transition: all 150ms ease-in-out;
  }

  img {
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
    box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.04);
  }
`

const ProjectCard = ({ category, title, description, thumbnail, uid }) => (
  <ProjectCardContainer>
    <ProjectCardContent className="ProjectCardContent">
      <ProjectCardCategory>{category[0].text}</ProjectCardCategory>
      <ProjectCardTitle>{title[0].text}</ProjectCardTitle>
      <ProjectCardBlurb>{RichText.render(description)}</ProjectCardBlurb>
      <ProjectCardAction className="ProjectCardAction" to={`/projects/${uid}`}>
        Details <span>&#8594;</span>
      </ProjectCardAction>
    </ProjectCardContent>
    <ProjectCardImageContainer
      className="ProjectCardImageContainer"
      to={`/projects/${uid}`}
    >
      <img src={thumbnail.url} alt={title[0].text} />
    </ProjectCardImageContainer>
  </ProjectCardContainer>
)

export default ProjectCard

ProjectCard.propTypes = {
  category: PropTypes.array.isRequired,
  thumbnail: PropTypes.object.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  uid: PropTypes.string.isRequired,
}
