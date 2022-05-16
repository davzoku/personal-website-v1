import React from "react"
import { css } from "@emotion/react"
import styled from "@emotion/styled"

export const Img = styled.img`
  max-width: 100%;
`

export const BasicImage = (props) => {
  return (
    <div align="center">
      <img
        css={css({
          width: props.width || "100%",
          maxWidth: props.maxwidth || "1200px",
          display: "block",
          margin: props.margin || "0",
          padding: props.padding || "1rem 0",
          borderRadius: "4px",
        })}
        src={props.src}
        alt={props.alt}
      />
    </div>
  )
}
