import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '@components/Layout';
import ProjectCardMdx from '@components/ProjectCardMdx';
import SeoHelmet from '@components/SeoHelmet';
import SectionGrid from '@components/_ui/SectionGrid';
import SectionPageTitle from '@components/_ui/SectionPageTitle';
import config from '../../config/website';
import { PageListingProps } from '../types/customGraphqlTypes';

function ProjectsPage({ data }: PageListingProps) {
  const projects = data.allMdx.edges;
  const meta = data.site.siteMetadata;
  if (!projects) return null;

  return (
    <>
      <SeoHelmet />
      <Helmet
        title="Projects"
        titleTemplate={`%s | ${meta!.author}`}
        meta={[
          {
            name: `description`,
            content: `${meta!.description}`,
          },
          {
            property: `og:title`,
            content: `Projects`,
          },
          {
            property: `og:description`,
            content: `${meta!.description}`,
          },
          {
            property: `og:image`,
            content: `${meta!.siteUrl}${meta!.image}`,
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
            content: `${meta!.twitterUsername}`,
          },
          {
            name: `twitter:title`,
            content: `${meta!.title}`,
          },
          {
            name: `twitter:description`,
            content: `${meta!.description}`,
          },
          {
            property: `twitter:image`,
            content: `${meta!.siteUrl}${meta!.image}`,
          },
        ].concat(meta)}
      />
      <Layout>
        <SectionPageTitle>Projects</SectionPageTitle>
        <h5>{config.projectDesc}</h5>
        <SectionGrid>
          {projects.map((project, i) => (
            <ProjectCardMdx key={i} data={project.node.frontmatter} />
          ))}
        </SectionGrid>
      </Layout>
    </>
  );
}

export default ProjectsPage;

export const query = graphql`
  {
    allMdx(
      filter: {
        frontmatter: { published: { eq: true }, type: { eq: "Project" } }
      }
      sort: { order: DESC, fields: frontmatter___startDate }
    ) {
      edges {
        node {
          frontmatter {
            description
            tags
            title
            techStack
            slug
            category
            githubLink
            extLink
            cover {
              id
              childImageSharp {
                gatsbyImageData(
                  width: 800
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
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
        image
        twitterUsername
        siteUrl
      }
    }
  }
`;
