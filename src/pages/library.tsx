import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '@components/Layout';
import BookCardMdx from '@components/BookCardMdx';
import SeoHelmet from '@components/SeoHelmet';
import dimensions from '@styles/dimensions';
import SectionPageTitle from '@components/_ui/SectionPageTitle';
import config from '../../config/website';
import { PageListingProps } from '../types/customGraphqlTypes';

const LibrarySection = styled('div')`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  gap: 1.5rem;

  @media (min-width: ${dimensions.maxwidthMobile}px) {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-template-rows: 1fr;
    gap: 1rem;
  }

  @media (min-width: ${dimensions.maxwidthTablet}px) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    grid-template-rows: 1fr;
    gap: 1rem;
  }

  @media (min-width: ${dimensions.maxwidthDesktop}px) {
    display: grid;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-rows: 1fr;
    gap: 1rem;
  }
`;

function LibraryPage({ data }: PageListingProps) {
  const books = data.allMdx.edges;
  const meta = data.site.siteMetadata;
  if (!books) return null;

  return (
    <>
      <SeoHelmet />
      <Helmet
        title="Resonance Library"
        titleTemplate={`%s | ${meta!.author}`}
        meta={[
          {
            name: `description`,
            content: `${meta!.description}`,
          },
          {
            property: `og:title`,
            content: `Resonance Library`,
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
        <SectionPageTitle>The Resonance Library</SectionPageTitle>
        <h5>{config.libraryDesc}</h5>
        <LibrarySection>
          {books.map((book, i) => (
            <BookCardMdx key={i} data={book.node.frontmatter} />
          ))}
        </LibrarySection>
      </Layout>
    </>
  );
}

export default LibraryPage;

export const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { published: { eq: true }, type: { eq: "Book" } } }
      sort: { order: DESC, fields: frontmatter___startDate }
    ) {
      edges {
        node {
          frontmatter {
            title
            author
            readingStatus
            slug
            cover {
              id
              childImageSharp {
                gatsbyImageData(
                  aspectRatio: 0.65
                  height: 475
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
