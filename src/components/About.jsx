import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
//import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
//import colors from "styles/colors"

const AboutContainer = styled("div")`
  padding-top: 1em;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-column-gap: 3em;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    grid-column-gap: 1.5em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-column-gap: 0.5em;
  }
`

const AboutPhoto = styled("div")`
  padding-top: 1em;
  padding-bottom: 3em;
  margin: auto;
  grid-area: 1 / 1 / 2 / 3;
  text-align: center;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding-bottom: 2em;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-bottom: 1em;
    grid-area: 1 / 1 / 2 / 4;
    img {
      width: 70%;

      margin-left: auto;
      margin-right: auto;
    }
  }
`

const AboutBio = styled("div")`
  padding-bottom: 3rem;
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
    padding-bottom: 2rem;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding-bottom: 1rem;
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
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    grid-area: 2 / 3 / 3 / 4;
    display: none;
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

const skills = ["Java", "Spring Framework", "JSP", "Javascript", "React", "AWS"]

const bioLinks = new Map([
  ["Twitter", "https://twitter.com/davzoku"],
  ["Github", "https://github.com/davzoku"],
  ["Linkedin", "https://www.linkedin.com/in/tengkokwai/"],
  ["Polywork", "https://www.polywork.com/walterteng"],
  ["Credly", "https://credly.com/users/waltertengkw/badges"],
])

const About = () => {
  return (
    <AboutContainer>
      <AboutPhoto>
        <StaticImage
          className="img"
          src="../images/profile-photo-circle-512.png"
          width={500}
          quality={95}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Profile Photo"
        />
      </AboutPhoto>
      <AboutBio>
        <p>
          Hi! My name is Walter, and I am currently based in Singapore. I did my
          Bachelors in
          <a href="https://www.ntu.edu.sg/eee">
            Nanyang Technological University (NTU)
          </a>
          , majoring in Electrical and Electronic Engineering.
        </p>

        <p>
          In my free time, I like to go hiking in nature and tinkering with code
          to make digital experiences smoother and more productive.
        </p>

        <p>
          Currently, I am working at
          <a href="https://www.crimsonlogic.com/">CrimsonLogic</a> focused on{" "}
          <a href="https://www.crimsonlogic.com/products-services/legal">
            digitalizing the judiciary system
          </a>
          .
        </p>

        <p>Here are a few technologies that I've been working with recently:</p>
        <ul>{skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
      </AboutBio>
      <AboutLinkContainer>
        {[...bioLinks].map((item) => {
          let name = item[0]
          let link = item[1]
          return (
            <AboutLink href={link} target="_blank" rel="noopener noreferrer">
              {name}
              <span>&#8594;</span>
            </AboutLink>
          )
        })}
      </AboutLinkContainer>
    </AboutContainer>
  )
}

export default About

About.propTypes = {}
