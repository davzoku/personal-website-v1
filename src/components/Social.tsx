import React from 'react';
import { css } from '@emotion/react';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';
import config from '../../config/website';

export const Twitter = ({ url = `${config.twitter}` }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={url}
    css={css`
      margin-left: 10px;
      color: var(--color-text, #16161a);
      :hover {
        color: var(--color-primary, #73abff);
      }
    `}
    aria-label="Visit my Twitter"
  >
    <TwitterIcon />
  </a>
);

export const GitHub = ({ url = `${config.github}` }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={url}
    css={css`
      margin-left: 10px;
      color: var(--color-text, #16161a);
      :hover {
        color: var(--color-primary, #73abff);
      }
    `}
    aria-label="Visit my GitHub"
  >
    <GitHubIcon />
  </a>
);

export const LinkedIn = ({ url = `${config.linkedin}` }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={url}
    css={css`
      margin-left: 10px;
      color: var(--color-text, #16161a);
      :hover {
        color: var(--color-primary, #73abff);
      }
    `}
    aria-label="Visit my Linkedin"
  >
    <LinkedInIcon />
  </a>
);

export const Instagram = ({ url = `${config.instagram}` }) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    href={url}
    css={css`
      margin-left: 10px;
      color: var(--color-text, #16161a);
      :hover {
        color: var(--color-primary, #73abff);
      }
    `}
    aria-label="Visit my Instagram"
  >
    <InstagramIcon />
  </a>
);
