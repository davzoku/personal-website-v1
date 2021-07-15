import React from "react"
import Helmet from "react-helmet"
import favicon16x16 from "images/favicon/favicon16.png"
import favicon32x32 from "images/favicon/favicon32.png"
import favicon64x64 from "images/favicon/favicon64.png"

const faviconLinks = [
  { rel: "icon", type: "image/png", sizes: "16x16", href: favicon16x16 },
  { rel: "icon", type: "image/png", sizes: "32x32", href: favicon32x32 },
  { rel: "shortcut icon", type: "image/png", href: favicon64x64 },
]

export default () => <Helmet link={faviconLinks}></Helmet>
