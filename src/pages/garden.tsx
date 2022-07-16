import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import Layout from '@components/Layout';
import NoteCardMdx from '@components/NoteCardMdx';
import SeoHelmet from '@components/SeoHelmet';
import SectionGrid from '@components/_ui/SectionGrid';
import SectionPageTitle from '@components/_ui/SectionPageTitle';
import config from '../../config/website';
import { PageListingProps } from '../types/customGraphqlTypes';

function GardenPage({ data }: PageListingProps) {
  const notes = data.allMdx.edges;
  const meta = data.site.siteMetadata;
  if (!notes) return null;

  return (
    <>
      <SeoHelmet />
      <Helmet
        title="Digital Garden"
        titleTemplate={`%s | ${meta!.author}`}
        meta={[
          {
            name: `description`,
            content: `${meta!.description}`,
          },
          {
            property: `og:title`,
            content: `Digital Garden`,
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
        <SectionPageTitle>The Digital Garden</SectionPageTitle>
        <h5>{config.gardenDesc}</h5>
        <SectionGrid>
          {notes.map((note, i) => (
            <NoteCardMdx key={i} data={note.node.frontmatter} />
          ))}
        </SectionGrid>
      </Layout>
    </>
  );
}

export default GardenPage;

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { published: { eq: true }, type: { eq: "Note" } } }
      sort: { order: DESC, fields: frontmatter___updated }
    ) {
      edges {
        node {
          frontmatter {
            description
            title
            slug
            tags
            growthStage
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
