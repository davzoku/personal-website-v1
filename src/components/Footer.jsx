import React from "react"
import styled from "@emotion/styled"
import colors from "styles/colors"
import icon from "images/icon.png"

const FooterContainer = styled("div")`
  padding-top: 2em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    max-width: 50px;
  }
`

const FooterAuthor = styled("a")`
  font-size: 0.75em;
  color: ${colors.grey700};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;
`

const FooterIcon = styled("img")`
  max-width: 33px;
  margin-top: 1em;
`

const Footer = () => (
  <FooterContainer>
    <FooterAuthor href="/">
      © 2021 - Built with React, Gatsby & ♥!
      <FooterIcon className="FooterIcon" src={icon} />
    </FooterAuthor>
  </FooterContainer>
)

export default Footer
