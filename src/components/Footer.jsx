import React from "react"
import styled from "@emotion/styled"
//import colors from "styles/colors"
//import icon from "images/icon.png"
import PropTypes from "prop-types"
import { Twitter, GitHub, LinkedIn } from "./Social"

const FooterContainer = styled("div")`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-top: 2em;
  padding-bottom: 3em;
  display: flex;
  justify-content: space-between;

  svg {
    max-width: 23px;
  }
`
const FooterCopyright = styled("div")`
  display: flex;
  justify-content: space-between;
`

const FooterAuthor = styled("a")`
  color: var(--color-text, #16161a);
  display: flex;
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;
  :hover {
    color: var(--color-primary, #73abff);
  }
`
const FooterLinks = styled("div")`
  margin-top: 1.5em;
`

// const FooterIcon = styled("img")`
//   max-width: 33px;
//   margin-top: 1em;
// `

const Footer = ({ author }) => (
  <FooterContainer>
    <FooterCopyright>
      <FooterAuthor href="/">
        {author} © {new Date().getFullYear()}
      </FooterAuthor>
    </FooterCopyright>
    <FooterLinks>
      <Twitter />
      <GitHub />
      <LinkedIn />
    </FooterLinks>
  </FooterContainer>
)

export default Footer

Footer.propTypes = {
  author: PropTypes.string.isRequired,
}
