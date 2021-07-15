import React from "react"
import { css } from "@emotion/core"
//import { useTheme } from './Theming'
///import {bpMaxSM} from '../lib/breakpoints'

const SimpleCard = (props) => {
  //const theme = useTheme()

  return (
    <div
      css={css({
        position: "relative",
        gridColumn: "1/4",
        border: "1px solid rgba(52, 61, 68, 0.05)",
        transition: props.hover
          ? "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;"
          : null,
        margin: "0.4rem auto 0.6rem",
        clear: "both",
        marginBottom: props.marginbottom ? props.marginbottom : "1rem",
        marginTop: props.margintop ? props.margintop : "1rem",
        padding: props.padding ? props.padding : "0.6rem 2rem 1.6rem",
        // [bpMaxSM]: {
        //   padding: '0.8rem 1rem'
        // },
        width: props.width ? props.width : "100%",
        maxWidth: props.maxWidth ? props.maxWidth : "100%",
        borderRadius: "6px",
        "p, h1, h2, h3, h4, h5, h6, span, button": {
          textAlign: props.textcenter ? "center" : null,
          margin: props.center ? "0.8rem auto 0" : null,
        },
        boxShadow: props.hover
          ? "0px 1px 2px rgba(52, 61, 68, 0.1)"
          : "0 4px 10px -4px rgba(0,0,0,0.15)",
        ":hover": {
          transform: props.hover ? "scale(1.015)" : null,
          borderRadius: props.hover ? "0px 0px 6px 6px" : null,
          boxShadow: props.hover ? "0 10px 30px -10px rgba(0,0,0,0.15)" : null,
          p: {
            transition: "all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;",
          },
          "::before": {
            backgroundColor: "#000",
          },
        },
        "::before": {
          position: "absolute",
          content: '" "',
          top: 0,
          left: 0,
          width: "100%",
          height: "2px",
          backgroundColor: "transparent",
          transition:
            "background-color 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) 0s;",
        },
      })}
      {...props}
    >
      {props.children}
    </div>
  )
}

export default SimpleCard
