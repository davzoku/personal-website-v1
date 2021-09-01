import { css } from "@emotion/react"
import dimensions from "styles/dimensions"

const typeStyles = css`
  h1 {
    font-size: 2.8em;
    line-height: 1.45;
    font-weight: 800;

    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 2.25em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 2em;
    }
  }

  h2 {
    margin-bottom: 2rem;
    font-size: 1.9em;
    line-height: 1.1;
  }

  h3 {
    line-height: 1.2;
    font-size: 1.5em;
  }

  h4 {
    line-height: 1.1;
    font-size: 1.3em;
  }

  h5 {
    margin: 1.2rem 0;
    font-weight: 500;
    line-height: 20px;
    font-size: 0.95em;
  }

  h6 {
    font-size: 0.9em;
    font-weight: 500;
    margin: 0;
  }

  p {
    line-height: 1.9;
  }

  a {
    &:hover {
      cursor: pointer;
    }
  }

  blockquote {
    background-color: var(--color-backgroundOffset, #ffffff);
    border-left: 5px solid var(--color-primaryOffset, #3672f8);
    margin: 20px 0;
  }

  blockquote p {
    margin: 1rem;
    padding: 1rem;
  }

  blockquote ul {
    margin: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }

  blockquote ol {
    margin: 1rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
}
`

export default typeStyles
