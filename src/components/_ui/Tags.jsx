import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import kebabCase from "lodash/kebabCase"
import { Link } from "gatsby"

const TagsDiv = styled("div")`
  max-width: ${dimensions.maxwidthTablet}px;
  margin: 0 auto;
  font-size: 0.75rem;
  line-height: 1.5rem;
  a {
    text-decoration: none;
    color: var(--color-primary, #73abff);
  }
  a:hover {
    text-decoration: none;
    color: var(--color-primaryOffset, #3672f8);
  }
`

const Tags = ({ prefix, tags }) => {
  return (
    <TagsDiv>
      <>Tags: </>
      {tags.slice(0, 3).map((tag, i) => {
        return (
          <span>
            <Link to={`/${prefix}/tags/${kebabCase(tag)}`}>
              {tag.toUpperCase()}
            </Link>
            {tags.slice(0, 3).length === i + 1 ? `` : `, `}
          </span>
        )
      })}
    </TagsDiv>
  )
}

export default Tags
