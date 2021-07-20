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
const LastUpdatedDate = styled("span")``

const PostTime = ({ timeToRead, updatedDate }) => {
  return (
    <PostTimeDiv>
      <ReadingTime>
        {timeToRead} min read {timeToRead > 5 ? "☕️" : "⚡️"}
      </ReadingTime>
      <LastUpdatedDate>Last Updated: {updatedDate}</LastUpdatedDate>
    </PostTimeDiv>
  )
}

export default PostTime
