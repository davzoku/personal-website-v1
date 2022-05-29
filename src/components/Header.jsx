import React, { useState, useContext } from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
//import colors from "styles/colors"
import dimensions from "styles/dimensions"
import Logo from "components/_ui/Logo"
import { ThemeContext } from "gatsby-plugin-theme-switcher"
import ThemePicker from "components/_ui/ThemePicker"
import SmoothCollapse from "react-smooth-collapse"
import FormatPaintIcon from "@material-ui/icons/FormatPaint"
import MenuIcon from "@material-ui/icons/Menu"
import CloseIcon from "@material-ui/icons/Close"
import config from "../../config/website"

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
  margin: auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 20vh;
`

const HeaderNavBar = styled("div")`
  display: flex;
  align-items: center;
`

const HeaderLinks = styled("div")`
  padding: 0.75rem 1.25rem;
  display: flex;
  align-items: center;
  flex-direction: row;

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

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: none;
  }
`

const HeaderButtons = styled("div")`
  display: flex;
  justify-content: space-evenly;
`

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
  margin-right: 1em;
  svg {
    margin: auto;
  }
`

const ThemeSelectorTitle = styled("div")`
  justify-content: center;
  align-items: center;
  text-align: center;
  font-weight: 700;
  padding: 1rem 1.5rem 0;
`

const CloseThemeBtn = styled(CloseIcon)`
  cursor: pointer;
  display: flex;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.125rem;
`

const MenuButton = styled("div")`
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
    margin: auto;
  }
  display: none;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: block;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: block;
  }
`

const BurgerNav = styled("div")`
  display: none;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: var(--color-backgroundOffset);
    width: 60%;
    z-index: 2;
    padding: 1em;
    font-size: 1.5em;
    text-align: center;
    transform: ${(props) =>
      props.show ? "translateX(0)" : "translateX(100%)"};
    transition: transform 0.3s;

    nav {
      display: flex;
      width: 100%;
      flex-direction: column;
    }

    ol {
      list-style: none;
      padding: 0;
    }

    li {
      padding: 2rem;
      border-bottom: 1px solid var(--color-border);
      a {
        font-weight: 600;
        text-decoration: none;
        color: var(--color-primary);
      }
      a:hover {
        color: var(--color-primaryOffset);
        font-weight: 800;
      }
    }
  }
  @media (max-width: ${dimensions.maxwidthMobile}px) {
    width: 100%;
  }
`

const CloseBtn = styled(CloseIcon)`
  cursor: pointer;
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 1.125rem;
`

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Header = () => {
  const { theme, switchTheme } = useContext(ThemeContext)
  const [themeExpanded, setThemeExpanded] = useState(false)
  const [burgerStatus, setBurgerStatus] = useState(false)

  return (
    <HeaderContainer>
      <ThemeMenu>
        <SmoothCollapse expanded={themeExpanded}>
          <ThemeSelectorTitle>Select Theme</ThemeSelectorTitle>
          <CloseThemeBtn
            aria-label="Close Theme"
            onClick={() => {
              setThemeExpanded(false)
            }}
          />

          <ThemePicker theme={theme} setTheme={switchTheme} />
        </SmoothCollapse>
      </ThemeMenu>
      <HeaderContent>
        <Link to="/">
          <Logo />
        </Link>
        <HeaderNavBar>
          <HeaderLinks>
            {config.navLinksShort && (
              <>
                {config.navLinksShort.map(({ url, name }, i) => (
                  <Link activeClassName="Link--is-active" to={url}>
                    {name}
                  </Link>
                ))}
              </>
            )}
            <a
              className="resume-button"
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </HeaderLinks>
          <HeaderButtons>
            <HeaderButton
              aria-label="Theme Changer"
              onClick={() => {
                setThemeExpanded(!themeExpanded)
                setBurgerStatus(false)
              }}
            >
              <FormatPaintIcon />
            </HeaderButton>
            <MenuButton
              onClick={() => {
                setBurgerStatus(true)
                setThemeExpanded(false)
              }}
            >
              <MenuIcon />
            </MenuButton>
          </HeaderButtons>
        </HeaderNavBar>
      </HeaderContent>

      <BurgerNav show={burgerStatus}>
        <CloseWrapper>
          <CloseBtn onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <nav>
          {config.navLinks && (
            <ol>
              {config.navLinks.map(({ url, name }, i) => (
                <li key={i}>
                  <Link to={url} onClick={() => setBurgerStatus(false)}>
                    {name}
                  </Link>
                </li>
              ))}
              <li>
                <a
                  className="resume-button"
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
              </li>
            </ol>
          )}
        </nav>
      </BurgerNav>
    </HeaderContainer>
  )
}

export default Header
