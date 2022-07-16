import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '@components/Layout';
import ProjectCardMdx from '@components/ProjectCardMdx';
import SeoHelmet from '@components/SeoHelmet';
import SectionGrid from '@components/_ui/SectionGrid';
import SectionPageTitle from '@components/_ui/SectionPageTitle';
import { TagsPageTemplateProps } from '../types/customGraphqlTypes';

const ProjectTagsTemplate = ({ data, pageContext }: TagsPageTemplateProps) => {
  const { tag } = pageContext;
  const projects = data.allMdx.edges;
  const meta = data.site.siteMetadata;

  return (
    <>
      <SeoHelmet />
      <Helmet
        title={`${tag}`}
        titleTemplate={`%s Projects | ${meta!.author}`}
        meta={[
          {
            name: `description`,
            content: `${meta!.description}`,
          },
          {
            property: `og:title`,
            content: `${tag}`,
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
        <SectionPageTitle>{tag}</SectionPageTitle>
        <h5>Projects related to {tag}</h5>
        <SectionGrid>
          {projects.map((project, i) => (
            <ProjectCardMdx key={i} data={project.node.frontmatter} />
          ))}
        </SectionGrid>
      </Layout>
    </>
  );
};

export default ProjectTagsTemplate;

export const query = graphql`
  query ($tag: String) {
    allMdx(
      filter: {
        frontmatter: {
          published: { eq: true }
          type: { eq: "Project" }
          tags: { in: [$tag] }
        }
      }
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
