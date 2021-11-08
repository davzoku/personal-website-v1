import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"

const PostTimeDiv = styled("div")`
  max-width: ${dimensions.maxwidthTablet}px;
  margin: 0 auto;
  border-bottom: 0.1em solid var(--color-text, #16161a);
  font-weight: 300;
  color: var(--color-text, #16161a);
  display: flex;
  align-items: center;
  justify-content: space-between;
`
const ReadingTime = styled("span")``
const GrowthStage = styled("span")``
const LastUpdatedDate = styled("span")``

const PostTime = ({ timeToRead, updatedDate, growthStage }) => {
  let growthStageEmoji = "🌱"

  // Growth stage emoji logic
  switch (growthStage) {
    case "Evergreen":
      growthStageEmoji = "🌳"
      break
    case "Budding":
      growthStageEmoji = "🌿"
      break
  }

  return (
    <PostTimeDiv>
      <ReadingTime>
        {timeToRead} min read {timeToRead > 5 ? "☕️" : "⚡️"}
      </ReadingTime>
      <GrowthStage>
        {growthStageEmoji} {growthStage}
      </GrowthStage>
      <LastUpdatedDate>Last Updated: {updatedDate}</LastUpdatedDate>
    </PostTimeDiv>
  )
}

export default PostTime
