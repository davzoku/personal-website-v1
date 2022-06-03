import React from 'react';
import styled from '@emotion/styled';
import dimensions from '@styles/dimensions';

const PostTimeDiv = styled('div')`
  max-width: ${dimensions.maxwidthTablet}px;
  margin: 0 auto;
  font-size: 0.75rem;
  line-height: 1.5rem;
`;

const PostTimeTopDiv = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  direction: rtl;
`;

const PostTimeBottomDiv = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Border = styled('div')`
  border-bottom: 0.1em solid var(--color-text, #16161a);
`;
const ReadingTime = styled('span')``;
const LastUpdatedDate = styled('span')``;

interface PostTimeProps {
  timeToRead: number;
  updatedDate: string;
  startDate: string;
}

const PostTime = ({ timeToRead, updatedDate, startDate }: PostTimeProps) => (
  <PostTimeDiv>
    <PostTimeTopDiv>
      <LastUpdatedDate>Last tended {updatedDate}</LastUpdatedDate>
    </PostTimeTopDiv>
    <PostTimeBottomDiv>
      <ReadingTime>
        {timeToRead} min read {timeToRead > 5 ? '☕️' : '⚡️'}
      </ReadingTime>
      <LastUpdatedDate>Planted {startDate}</LastUpdatedDate>
    </PostTimeBottomDiv>
    <Border />
  </PostTimeDiv>
);

export default PostTime;
