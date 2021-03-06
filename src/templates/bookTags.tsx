import React from 'react';
import Helmet from 'react-helmet';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import Layout from '@components/Layout';
import BookCardMdx from '@components/BookCardMdx';
import SeoHelmet from '@components/SeoHelmet';
import dimensions from '@styles/dimensions';
import SectionPageTitle from '@components/_ui/SectionPageTitle';
import { TagsPageTemplateProps } from '../types/customGraphqlTypes';

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

const BookTagsTemplate = ({ data, pageContext }: TagsPageTemplateProps) => {
  const { tag } = pageContext;
  const books = data.allMdx.edges;
  const meta = data.site.siteMetadata;

  return (
    <>
      <SeoHelmet />
      <Helmet
        title={`${tag}`}
        titleTemplate={`%s Books | ${meta!.author}`}
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
        <h5>Books related to {tag}</h5>
        <LibrarySection>
          {books.map((book, i) => (
            <BookCardMdx key={i} data={book.node.frontmatter} />
          ))}
        </LibrarySection>
      </Layout>
    </>
  );
};

export default BookTagsTemplate;

export const query = graphql`
  query ($tag: String) {
    allMdx(
      filter: {
        frontmatter: {
          published: { eq: true }
          type: { eq: "Book" }
          tags: { in: [$tag] }
        }
      }
      sort: { order: DESC, fields: frontmatter___updated }
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
