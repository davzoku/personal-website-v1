import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import styled from "@emotion/styled"
import colors from "styles/colors"
import { Link, graphql } from "gatsby"
import { RichText } from "prismic-reactjs"
import Button from "components/_ui/Button"
import Layout from "components/Layout"

const ProjectHeroContainer = styled("div")`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  overflow: hidden;
  position: relative;
  margin-bottom: 3.5em;

  img {
    max-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`

const ProjectTitle = styled("div")`
  max-width: 550px;
  margin: 0 auto;
  text-align: center;
`

const ProjectBody = styled("div")`
  max-width: 550px;
  margin: 0 auto;

  a {
    margin-bottom: 1.5em;
    font-weight: 600;
    line-height: 1.9;
    text-decoration: none;
    color: ${colors.blue500};
  }

  a:hover {
    color: white;
    background: linear-gradient(
      135deg,
      ${colors.blueMarine100} 0%,
      ${colors.blueMarine600} 100%
    );
  }

  .block-img {
    margin-top: 3.5em;
    margin-bottom: 0.5em;

    img {
      width: 100%;
    }
  }
`

const Projectslink = styled(Link)`
  margin-top: 3em;
  display: block;
  text-align: center;
`

const Project = ({ project, meta }) => {
  return (
    <>
      <Helmet
        title={`${project.project_title[0].text} | Prist, Gatsby & Prismic Starter`}
        titleTemplate={`%s | ${meta.title}`}
        meta={[
          {
            name: `description`,
            content: meta.description,
          },
          {
            property: `og:title`,
            content: `${project.project_title[0].text} | Prist, Gatsby & Prismic Starter`,
          },
          {
            property: `og:description`,
            content: meta.description,
          },
          {
            property: `og:type`,
            content: `website`,
          },
          {
            name: `twitter:card`,
            content: `summary`,
          },
          {
            name: `twitter:creator`,
            content: meta.author,
          },
          {
            name: `twitter:title`,
            content: meta.title,
          },
          {
            name: `twitter:description`,
            content: meta.description,
          },
        ].concat(meta)}
      />
      <Layout>
        <ProjectTitle>{RichText.render(project.project_title)}</ProjectTitle>
        {project.project_hero_image && (
          <ProjectHeroContainer>
            <img src={project.project_hero_image.url} alt="bees" />
          </ProjectHeroContainer>
        )}
        <ProjectBody>
          {RichText.render(project.project_description)}
        </ProjectBody>
        <Projectslink to={"/projects"}>
          <Button className="Button--secondary">See other projects</Button>
        </Projectslink>
      </Layout>
    </>
  )
}

export default ({ data }) => {
  const projectContent = data.prismic.allProjects.edges[0].node
  const meta = data.site.siteMetadata
  return <Project project={projectContent} meta={meta} />
}

Project.propTypes = {
  project: PropTypes.object.isRequired,
}

export const query = graphql`
  query ProjectQuery($uid: String) {
    prismic {
      allProjects(uid: $uid) {
        edges {
          node {
            project_title
            project_preview_description
            project_preview_thumbnail
            project_category
            project_post_date
            project_hero_image
            project_description
            _meta {
              uid
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
