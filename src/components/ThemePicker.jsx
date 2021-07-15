import React from "react"
import PropTypes from "prop-types"
import ReactTooltip from "react-tooltip"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import MIcon from "images/theme-logo-merlion.svg"
import NSIcon from "images/theme-logo-ns.svg"
import GBTBIcon from "images/theme-logo-gbtb.svg"
import CTIcon from "images/theme-logo-ct.svg"
import SSIcon from "images/theme-logo-ss.svg"

const ThemeButtons = styled("div")`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  text-align: center;
  padding: 1rem 1.5rem 1rem;

  img {
    max-width: 20%;
    max-height: 20%;
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    img {
      max-width: 35%;
      max-height: 35%;
    }
  }
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    img {
      max-width: 50%;
      max-height: 50%;
    }
  }

  .selectedThemeText {
    font-weight: 700;
    color: var(--color-primary, #73abff);
    border-top: 5px solid var(--color-primary, #73abff);
  }

  &:hover {
    cursor: pointer;
    animation-name: bounce;
    -moz-animation-name: bounce;
  }
`

const ThemeButton = styled("div")``

const ThemeName = styled("div")`
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 1rem;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: none;
  }
`

const allThemes = new Map([
  ["Merlion", MIcon, "🦁"],
  ["Night Safari", NSIcon, "🐯"],
  ["Garden by the Bay", GBTBIcon, "🌳"],
  ["Chinatown", CTIcon, "🏮"],
  ["Sentosa Sunset", SSIcon, "🏖️"],
])
const ThemePicker = ({ theme, setTheme, small }) => {
  return (
    <ThemeButtons>
      <ReactTooltip />

      {[...allThemes].map((item) => {
        let name = item[0]
        let svg = item[1]
        let emoji = item[2]
        const themeVal = name.toLowerCase().replace(/ /g, "-")

        return (
          <ThemeButton
            key={name}
            className={`theme-${themeVal}`}
            aria-label={`Theme ${name}`}
            className={`${
              theme === `theme-${themeVal}` ? "selectedTheme" : ""
            }`}
            onClick={() => setTheme(`theme-${themeVal}`)}
          >
            <div data-tip={`${name}`}>
              <img src={svg} />
            </div>
            <ThemeName
              className={`${
                theme === `theme-${themeVal}` ? "selectedThemeText" : ""
              }`}
            >
              {name}
            </ThemeName>
          </ThemeButton>
        )
      })}
    </ThemeButtons>
  )
}

ThemePicker.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
}

export default ThemePicker
