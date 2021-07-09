import React, { useContext } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import { Global } from "@emotion/react"
import globalStyles from "styles/global"
import typeStyles from "styles/typography"
//import dimensions from "styles/dimensions"
import Footer from "components/Footer"
import Header from "components/Header"
import "styles/fonts.scss"
// import { ThemeContext } from "gatsby-plugin-theme-switcher"
// import ThemeSwitcher from "components/_ui/ThemeSwitcher"

const LayoutContainer = styled.div``

const Layout = ({ children }) => {
  // const { theme, switchTheme } = useContext(ThemeContext)
  return (
    <StaticQuery
      query={graphql`
        query SiteTitleQuery {
          site {
            siteMetadata {
              author
              title
            }
          }
        }
      `}
      render={(data) => (
        <LayoutContainer className="div">
          <Global styles={[globalStyles, typeStyles]} />
          <div className="Layout">
            <Header />
            {/* <div style={{ position: "absolute", top: 0, right: 0 }}>
              <ThemeSwitcher theme={theme} setTheme={switchTheme} />
            </div> */}
            <main className="Layout__content">{children}</main>
            <Footer author={data.site.siteMetadata.author} />
          </div>
        </LayoutContainer>
      )}
    />
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
