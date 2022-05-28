import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import ReactTooltip from "react-tooltip"

const PostTimeDiv = styled("div")`
  max-width: ${dimensions.maxwidthTablet}px;
  margin: 0 auto;
  font-size: 0.75rem;
  line-height: 1.5rem;
`

const PostTimeTopDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const PostTimeBottomDiv = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.1em solid var(--color-text, #16161a);
`

const ReadingTime = styled("span")``
const GrowthStage = styled("span")`
  cursor: help;
`
const LastUpdatedDate = styled("span")``

const PostTime = ({ timeToRead, updatedDate, startDate, growthStage }) => {
  let growthStageEmoji = "🌱"
  let toolTip =
    "Seedlings are ideas I have just created. They are raw, unpolished and require time to develop."

  // Growth stage emoji logic
  switch (growthStage) {
    case "Evergreen":
      growthStageEmoji = "🌳"
      toolTip =
        "Evergreens are mature ideas. Little change is expected, except for occassional edits."
      break
    case "Budding":
      growthStageEmoji = "🌿"
      toolTip =
        "Buddings are ideas that still require a little more time to grow and mature."
      break
  }

  return (
    <PostTimeDiv>
      <PostTimeTopDiv>
        <ReadingTime>
          {timeToRead} min read {timeToRead > 5 ? "☕️" : "⚡️"}
        </ReadingTime>
        <LastUpdatedDate>Last tended {updatedDate}</LastUpdatedDate>
      </PostTimeTopDiv>
      <PostTimeBottomDiv>
        <ReactTooltip />
        <GrowthStage data-tip={`${toolTip}`}>
          {growthStage} {growthStageEmoji}
        </GrowthStage>
        <LastUpdatedDate>Planted {startDate}</LastUpdatedDate>
      </PostTimeBottomDiv>
    </PostTimeDiv>
  )
}

export default PostTime
