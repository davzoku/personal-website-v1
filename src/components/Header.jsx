import React, { useState, useEffect, useContext } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
//import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "components/_ui/Logo"
import { ThemeContext } from "gatsby-plugin-theme-switcher"
import ThemePicker from "./ThemePicker"
import SmoothCollapse from "react-smooth-collapse"
import FormatPaintIcon from "@material-ui/icons/FormatPaint"

const HeaderContainer = styled("div")``

const ThemeMenu = styled("div")`
  background: var(--color-backgroundOffset);
  width: 100%;
  border-bottom: 1px var(--color-border);

  color: var(--color-text);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: "Segoe UI", Roboto, sans-serif;
`

const HeaderContent = styled("div")`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderLinks = styled("div")`
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
  }

  a {
    color: var(--color-text, #16161a);
    text-decoration: none;
    border-bottom: 3px solid transparent;
    font-weight: 600;
    font-size: 1em;
    height: 100%;
    padding-right: 1em;
    display: block;
    position: relative;
    line-height: 2;

    &:after {
      position: absolute;
      content: "";
      bottom: 0;
      left: 0.5rem;
      right: 0.5rem;
      height: 5px;
      background: transparent;
      bottom: -5px;
      right: 50%;
      margin-right: -9px;
      transition: 100ms ease-in-out background;
    }

    &:hover {
      &:after {
        background: var(--color-primary, #73abff);
        transition: 100ms ease-in-out background;
      }
    }

    &.Link--is-active {
      &:after {
        background: var(--color-primary, #73abff);
        transition: 100ms ease-in-out background;
      }
    }
  }
`

const HeaderButtons = styled("div")``

const HeaderButton = styled("div")`
  padding-bottom: 1em;
  padding-top: 0.75em;
  justify-content: center;
  align-items: stretch;
  text-align: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  color: var(--color-text);
  background-color: var(--color-backgroundOffset);
  border: 2px var(--color-border);
  cursor: pointer;
  svg {
    display: block;
    margin: auto;
  }
`

const ThemeSelectorTitle = styled("div")`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  padding: 2rem 1.5rem 0;
`

const Header = () => {
  const { theme, switchTheme } = useContext(ThemeContext)
  const [themeExpanded, setThemeExpanded] = useState(false)
  const [menuExpanded, toggleMenuExpansion] = useState(false)

  return (
    <HeaderContainer>
      <ThemeMenu>
        <SmoothCollapse expanded={themeExpanded} className="">
          <ThemeSelectorTitle>Select Theme</ThemeSelectorTitle>

          <ThemePicker theme={theme} setTheme={switchTheme} />
        </SmoothCollapse>
      </ThemeMenu>
      <HeaderContent>
        <Link to="/">
          <Logo />
        </Link>
        <HeaderLinks>
          <Link activeClassName="" to=""></Link>
          <Link activeClassName="Link--is-active" to="/projects">
            Projects
          </Link>
          <HeaderButtons>
            <HeaderButton>
              <FormatPaintIcon
                aria-label="Theme Changer"
                onClick={() => {
                  setThemeExpanded(!themeExpanded)
                  toggleMenuExpansion(false)
                }}
              />
            </HeaderButton>
          </HeaderButtons>
        </HeaderLinks>
      </HeaderContent>
    </HeaderContainer>
  )
}

export default Header
