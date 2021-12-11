import { css } from "@emotion/react"
//import colors from "styles/colors"
import dimensions from "styles/dimensions"
import "styles/multitheme.css"

const globalStyles = css`
  body {
    width: 100%;
    margin: 0 auto;
    font-size: 16px;
    line-height: 1.5;
    color: var(--color-text, #16161a);
    background: var(--color-background, #ffffff);
    -webkit-font-smoothing: antialiased;

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 14px;
    }

    * {
      box-sizing: border-box;

      &::selection {
        background: var(--color-secondary, #08bee7);
        color: white;
      }
    }
  }

  .Layout__content {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
    max-width: 1200px;
  }

  @keyframes bounce {
    0%,
    100%,
    20%,
    50%,
    80% {
      -webkit-transform: translateY(0);
      -ms-transform: translateY(0);
      transform: translateY(0);
    }
    40% {
      -webkit-transform: translateY(-30px);
      -ms-transform: translateY(-30px);
      transform: translateY(-30px);
    }
    60% {
      -webkit-transform: translateY(-15px);
      -ms-transform: translateY(-15px);
      transform: translateY(-15px);
    }
  }

  /*
    A workaround for forcing accessibility wrappers
    to have a 100% height.
    Reach Router issue here: https: //github.com/reach/router/issues/63
    */
  #___gatsby,
  div[role="group"][tabindex] {
    height: 100%;
    min-height: 100% !important;
  }

  a.anchor {
    fill: var(--color-primary, #73abff);
  }

  pre {
    background-color: var(--color-backgroundOffset);
    border: 1px solid var(--color-border);
    border-radius: 0.3rem;
    margin: 1rem;
    padding: 1rem;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  code {
    background-color: var(--color-backgroundOffset);
    padding: 0.1rem;
  }

  table,
  th,
  td {
    border: 1px solid var(--color-border);
    border-collapse: collapse;
    padding: 0.5rem;
  }

  .twitter-tweet,
  .twitter-tweet-rendered {
    margin: 40px auto;
    align-content: center;
  }

  .video-container {
    overflow: hidden;
    position: relative;
    width: 100%;
  }

  .video-container::after {
    padding-top: 56.25%;
    display: block;
    content: "";
  }

  .video-container iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .toc {
    border: 1px solid var(--color-border);
    border-radius: 0.3rem;
    padding: 0.5rem;
    background-color: var(--color-backgroundOffset);
  }
`

export default globalStyles
