import React from "react"
import { css } from "@emotion/react"
import config from "../../config/website"
import TwitterIcon from "@material-ui/icons/Twitter"
import GitHubIcon from "@material-ui/icons/GitHub"
import LinkedInIcon from "@material-ui/icons/LinkedIn"
import colors from "styles/colors"

export const Twitter = ({ url = `${config.twitter}` }) => {
  return (
    <a
      target="_blank"
      rel="me noopener"
      href={url}
      css={css`
        margin-left: 10px;
        color: ${colors.grey900};
        :hover {
          color: ${colors.grey700};
        }
      `}
      aria-label="Visit my Twitter"
    >
      <TwitterIcon />
    </a>
  )
}

export const GitHub = ({ url = `${config.github}` }) => {
  return (
    <a
      target="_blank"
      rel="noopener"
      href={url}
      css={css`
        margin-left: 10px;
        color: ${colors.grey900};
        :hover {
          color: ${colors.grey700};
        }
      `}
      aria-label="Visit my GitHub"
    >
      <GitHubIcon />
    </a>
  )
}

export const LinkedIn = ({ url = `${config.linkedin}` }) => {
  return (
    <a
      target="_blank"
      rel="noopener"
      href={url}
      css={css`
        margin-left: 10px;
        color: ${colors.grey900};
        :hover {
          color: ${colors.grey700};
        }
      `}
      aria-label="Visit my Linkedin"
    >
      <LinkedInIcon />
    </a>
  )
}
