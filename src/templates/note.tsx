import React from 'react';
import Helmet from 'react-helmet';
import styled from '@emotion/styled';
import { graphql } from 'gatsby';
import Layout from '@components/Layout';
import dimensions from '@styles/dimensions';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import DefaultMdxComponentsProvider from '@components/mdx/DefaultProvider';
import SeoHelmet from '@components/SeoHelmet';
import PreviousNext from '@components/_ui/PreviousNext';
import PostTime from '@components/_ui/PostTimeGrowthStage';
import Share from '@components/_ui/Share';
import Tags from '@components/_ui/Tags';
import { PageTemplateProps } from '../types/customGraphqlTypes';

const NoteTitle = styled('div')`
  max-width: ${dimensions.maxwidthTablet}px;
  margin: 0 auto;
  text-align: center;
`;

const NoteBody = styled('div')`
  max-width: ${dimensions.maxwidthTablet}px;
  margin: 0 auto;

  a:not(.anchor) {
    font-weight: 600;
    color: var(--color-primary, #73abff);
    box-shadow: inset 0 -2px 0 0 var(--color-primary, #73abff);
    border-bottom: 1px solid var(--color-primary, #73abff);
    text-decoration: none;
    transition: all 150ms ease-in-out;
  }

  a:hover:not(.anchor) {
    color: var(--color-background, #ffffff);
    box-shadow: inset 0 -1.25em 0 0 var(--color-primary, #73abff);
    border-bottom-color: var(--color-primary, #73abff);
    outline: 0;
    text-decoration: none;
  }

  .block-img {
    margin-top: 3.5em;
    margin-bottom: 0.5em;

    img {
      display: block;
      margin: 0 auto;
      max-width: 100%;
    }

    a:hover {
      background: rgba(0, 0, 0, 0) !important;
    }
  }
`;

function NoteTemplate({ data, pageContext }: PageTemplateProps) {
  const note = data.mdx;
  const meta = data.site.siteMetadata;
  const prev = pageContext.prevPage;
  const next = pageContext.nextPage;
  return (
    <>
      <SeoHelmet />
      <Helmet
        title={`${note.frontmatter!.title}`}
        titleTemplate={`%s | ${meta!.author}`}
        meta={[
          {
            name: `description`,
            content: `${note.frontmatter!.description}`,
          },
          {
            property: `og:title`,
            content: `${note.frontmatter!.title}`,
          },
          {
            property: `og:description`,
            content: `${note.frontmatter!.description}`,
          },
          {
            property: `og:image`,
            content: `${meta!.siteUrl}${
              note.frontmatter!.cover!.childImageSharp!.gatsbyImageData.images
                .fallback.src
            }`,
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
            content: meta!.twitterUsername,
          },
          {
            name: `twitter:title`,
            content: `${note.frontmatter!.title}`,
          },
          {
            name: `twitter:description`,
            content: `${note.frontmatter!.description}`,
          },
          {
            property: `twitter:image`,
            content: `${meta!.siteUrl}${
              note.frontmatter!.cover!.childImageSharp!.gatsbyImageData.images
                .fallback.src
            }`,
          },
        ].concat(meta)}
      />
      <Layout>
        <NoteTitle>
          <h1>{note.frontmatter!.title}</h1>
        </NoteTitle>
        <PostTime
          timeToRead={note.timeToRead}
          updatedDate={note.frontmatter!.updated}
          startDate={note.frontmatter!.startDate}
          growthStage={note.frontmatter!.growthStage}
        />
        <Tags prefix="garden" tags={note.frontmatter!.tags} />
        <NoteBody>
          <DefaultMdxComponentsProvider>
            <MDXRenderer>{note.body}</MDXRenderer>
          </DefaultMdxComponentsProvider>
        </NoteBody>
        <Share
          url={`${meta!.siteUrl}/${note.frontmatter!.slug}`}
          title={note.frontmatter!.title}
          twitterHandle={meta!.twitterUsername}
        />
        <PreviousNext
          prevSlug={prev && prev.frontmatter.slug}
          prevTitle={prev && prev.frontmatter.title}
          nextSlug={next && next.frontmatter.slug}
          nextTitle={next && next.frontmatter.title}
        />
      </Layout>
    </>
  );
}

export default NoteTemplate;

export const query = graphql`
  query ($id: String!) {
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
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
        tags
        type
        growthStage
        updated(fromNow: true)
        startDate(fromNow: true)
        description
        cover {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
      timeToRead
    }
  }
`;
