import React from 'react';
import styled from '@emotion/styled';
import dimensions from '@styles/dimensions';
import ReactTooltip from 'react-tooltip';
import { GrowthStageEmoji } from '@components/_ui/EmojiSelector';

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
`;

const PostTimeBottomDiv = styled('div')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1em solid var(--color-text, #16161a);
`;

const ReadingTime = styled('span')``;
const GrowthStage = styled('span')`
  cursor: help;
`;
const LastUpdatedDate = styled('span')``;

interface PostTimeProps {
  timeToRead: number;
  updatedDate: string;
  startDate: string;
  growthStage: string;
}

const PostTime = ({
  timeToRead,
  updatedDate,
  startDate,
  growthStage,
}: PostTimeProps) => {
  const growthStageEmoji = GrowthStageEmoji(growthStage);

  return (
    <PostTimeDiv>
      <PostTimeTopDiv>
        <ReadingTime>
          {timeToRead} min read {timeToRead > 5 ? '☕️' : '⚡️'}
        </ReadingTime>
        <LastUpdatedDate>Last tended {updatedDate}</LastUpdatedDate>
      </PostTimeTopDiv>
      <PostTimeBottomDiv>
        <ReactTooltip />
        <GrowthStage data-tip={`${growthStageEmoji.toolTip}`}>
          {growthStage} {growthStageEmoji.emoji}
        </GrowthStage>
        <LastUpdatedDate>Planted {startDate}</LastUpdatedDate>
      </PostTimeBottomDiv>
    </PostTimeDiv>
  );
};

export default PostTime;
