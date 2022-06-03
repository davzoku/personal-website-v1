import React from 'react';
import styled from '@emotion/styled';
import TwitterIcon from '@material-ui/icons/Twitter';
import { TwitterShareButton } from 'react-share';

const TwitterShare = styled('div')`
  text-align: center;
  margin: 4rem auto;

  span {
    color: var(--color-primary, #73abff);
  }

  .icon {
    transform: scale(1.8);
  }

  .button:hover {
    color: var(--color-primary, #73abff);
  }

  h6 {
    font-style: italic;
    line-height: 1.5rem;
  }
`;

const Clickable = styled('div')`
  h3:hover {
    color: var(--color-primary, #73abff);
  }
`;

interface ShareProps {
  url: string;
  title: string;
  twitterHandle: string;
}

const Share = ({ url, title, twitterHandle }: ShareProps) => (
  <TwitterShare>
    <>
      <TwitterShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
      >
        <TwitterIcon className="icon" />
      </TwitterShareButton>
    </>
    <Clickable>
      <TwitterShareButton
        url={url}
        quote={title}
        via={twitterHandle.split('@').join('')}
      >
        <h3>
          <span>Share on Twitter</span> if you liked this article.
        </h3>
      </TwitterShareButton>
    </Clickable>
    <h6>It makes my day when I see it. </h6>😊
  </TwitterShare>
);

export default Share;
