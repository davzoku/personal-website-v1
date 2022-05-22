import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import Layout from "components/Layout"
import SeoHelmet from "components/SeoHelmet"
import { StaticImage } from "gatsby-plugin-image"

const Hero = styled("div")`
  padding-top: 2.5em;
  padding-bottom: 1em;
  text-align: center;
  a {
    text-decoration: none;
    transition: all 100ms ease-in-out;
    color: var(--color-text);

    &:hover {
      color: var(--color-primary, #73abff);
      cursor: pointer;
      transition: all 100ms ease-in-out;
    }
  }
`

const Section = styled("div")`
  margin-bottom: 5em;
  display: flex;
  flex-direction: column;

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    margin-bottom: 4em;
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`

const LinkButton = styled.button`
  display: inline-block;
  font-weight: 600;
  padding: 1rem 1rem;
  margin: 0.5rem 0;
  width: 100%;
  border: 0.1rem solid var(--color-primary, #73abff);
  background: none;
  color: var(--color-text);
  letter-spacing: 4px;
  text-transform: uppercase;
  text-decoration: none;
  transition: 0.3s ease 0s;
  &:hover {
    background: var(--color-primary, #73abff);
    color: var(--color-textOffset, #16161a);
    cursor: pointer;
    transition: all 100ms ease-in-out;
  }
`

const linksArray = [
  {
    text: "Spark AR Filters",
    url: "https://www.facebook.com/sparkarhub/portfolios/ig/drawwithwalter/",
    target: "_blank",
  },
  {
    text: "Notion Templates",
    url: "https://www.notion.so/walterteng/Walter-Teng-s-Public-Templates-1b8641ca447f47b09289fb41907cbae0",
    target: "_blank",
  },
  {
    text: "Microsoft Edge Add-ons",
    url: "https://microsoftedge.microsoft.com/addons/search?developer=davzoku",
    target: "_blank",
  },
]

const RenderBody = ({ meta }) => (
  <>
    <SeoHelmet />
    <Helmet
      title={`Featured Links`}
      titleTemplate={`%s | ${meta.author}`}
      meta={[
        {
          name: `description`,
          content: meta.description,
        },
        {
          property: `og:title`,
          content: meta.title,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:image`,
          content: meta.siteUrl + meta.image,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:creator`,
          content: meta.twitterUsername,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
        {
          property: `twitter:image`,
          content: meta.siteUrl + meta.image,
        },
      ].concat(meta)}
    />
    <Hero>
      <a href="/">
        <StaticImage
          className="img"
          src="../images/profile-photo-circle-dww-512.png"
          width={150}
          quality={100}
          placeholder="blurred"
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="Profile Photo"
        />
      </a>
      <h5>
        Hi there! I'm <a href="/">Walter</a> 👋🏻
      </h5>
      <h6>
        <i>
          <a href="https://www.instagram.com/drawwithwalter">@drawwithwalter</a>
        </i>
      </h6>
    </Hero>
    <Section>
      {linksArray.map(function (item, index) {
        return (
          <a
            href={item.url}
            ariaLabel="This is a button link"
            target={item.target}
          >
            <LinkButton>{item.text}</LinkButton>
          </a>
        )
      })}
    </Section>
  </>
)

export default ({ data }) => {
  const meta = data.site.siteMetadata

  return (
    <Layout>
      <RenderBody meta={meta} />
    </Layout>
  )
}

RenderBody.propTypes = {
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    site {
      siteMetadata {
        title
        description
        author
        image
        twitterUsername
        siteUrl
      }
    }
  }
`
