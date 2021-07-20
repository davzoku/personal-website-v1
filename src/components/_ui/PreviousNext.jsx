import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"

const NavContainer = styled("div")`
  max-width: ${dimensions.maxwidthTablet}px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
`

const NavAction = styled(Link)`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  font-weight: 600;
  text-decoration: none;
  color: var(--color-primary, #73abff);
  span {
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
  .leftArrow {
    margin-right: 0.5em;
    transform: translateX(0px);
  }
  .rightArrow {
    margin-left: 1em;
    transform: translateX(-8px);
  }
  &:hover {
    color: var(--color-text, #16161a);
    transition: transform 150ms ease-in-out;
    .leftArrow {
      transform: translateX(-8px);
    }
    .rightArrow {
      transform: translateX(0px);
    }
  }
`

const PreviousNext = (props) => {
  return (
    <NavContainer>
      {props.prevSlug && (
        <NavAction to={`/${props.prevSlug}`} aria-label="View previous page">
          <span className="leftArrow">&#8592;</span>
          {props.prevTitle}
        </NavAction>
      )}
      {props.nextSlug && (
        <NavAction to={`/${props.nextSlug}`} aria-label="View next page">
          {props.nextTitle}
          <span className="rightArrow">&#8594;</span>
        </NavAction>
      )}
    </NavContainer>
  )
}

export default PreviousNext
