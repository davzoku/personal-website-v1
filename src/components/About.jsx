import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import { RichText } from "prismic-reactjs"
import PropTypes from "prop-types"
import profilePhoto from "images/profile-photo.png"
//import colors from "styles/colors"

const AboutContainer = styled("div")`
  padding-top: 1em;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 3em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 2em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 1em;
  }
`

const AboutPhoto = styled("div")`
  padding-top: 1em;
  padding-bottom: 3em;
  margin: auto;
  grid-area: 1 / 1 / 2 / 3;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-area: 1 / 1 / 2 / 4;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-area: 1 / 1 / 2 / 4;
  }
`

const AboutProfilePhoto = styled("img")`
  width: 100%;
`

const AboutBio = styled("div")`
  padding-bottom: 3em;
  grid-area: 1 / 3 / 2 / 7;

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

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
  }
  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-size: 0.85em;
    &:before {
      content: "▹";
      position: absolute;
      left: 0;
      color: var(--color-primary, #73abff);
      font-size: 1.5em;
      line-height: 18px;
    }
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-area: 2 / 1 / 3 / 3;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-area: 2 / 1 / 3 / 3;
    ul {
      display: grid;
      grid-template-columns: 1fr;
      padding: 0;
      margin: 20px 0 0 0;
      overflow: hidden;
      list-style: none;
    }
  }
`

const AboutLinkContainer = styled("div")`
  padding-top: 1em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  grid-area: 1 / 7 / 2 / 8;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-area: 2 / 3 / 3 / 4;
    padding-left: 3em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-area: 2 / 3 / 3 / 4;
  }
`

const AboutLink = styled("a")`
  margin-bottom: 1.5em;
  font-weight: 600;
  line-height: 1.9;
  text-decoration: none;
  color: var(--color-text, #16161a);

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    opacity: 0;
    transition: all 400ms ease-in-out;
  }

  &:hover {
    span {
      transform: translateX(0px);
      opacity: 1;
      transition: all 150ms ease-in-out;
    }
  }
`

const About = ({ bio, socialLinks }) => (
  <AboutContainer>
    <AboutPhoto>
      <AboutProfilePhoto className="ProfilePhoto" src={profilePhoto} />
    </AboutPhoto>
    <AboutBio>{RichText.render(bio)}</AboutBio>
    <AboutLinkContainer>
      {socialLinks.map((social, i) => (
        <AboutLink
          key={i}
          href={social.about_link.raw[0].spans[0].data.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {social.about_link.raw[0].text}
          <span>&#8594;</span>
        </AboutLink>
      ))}
    </AboutLinkContainer>
  </AboutContainer>
)

export default About

About.propTypes = {
  bio: PropTypes.array.isRequired,
  socialLinks: PropTypes.array.isRequired,
}
