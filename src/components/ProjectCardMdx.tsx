import React from 'react';
import kebabCase from 'lodash/kebabCase';
import { Link } from 'gatsby';
import styled from '@emotion/styled';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import GitHubIcon from '@material-ui/icons/GitHub';
import PublicIcon from '@material-ui/icons/Public';
import { css } from '@emotion/react';
import { MdxFrontmatter } from '../types/graphqlTypes';

const ProjectCardContainer = styled('div')`
  background: var(--color-backgroundOffset, #ffffff);
  border: 1px solid var(--color-border, #f5f5ff);
  border-radius: 0.3rem;
  color: var(--color-text, #16161a);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.06);
  transition: all 150ms ease-in-out;

  a {
    text-decoration: none;
    color: var(--color-primary, #73abff);
  }

  &:hover {
    box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
    transform: scale3d(1.02, 1.02, 1.02);
    transition: all 150ms ease-in-out;
  }
`;

const ImageContainer = styled('div')`
  max-height: 22rem;
  overflow: hidden;
  img {
    border-radius: 0.3rem;
    min-height: 100%;
    min-width: 100%;
    object-fit: cover;
    vertical-align: bottom;
  }
`;

const PostCategory = styled('h6')`
  padding: 2rem 2rem 0 2rem;
  font-weight: 600;
  color: var(--color-primaryOffset, #3672f8);
`;

const PostTitle = styled('h3')`
  margin: 0;
  margin-top: 0.5em;
  padding: 0 2rem;
  a {
    text-decoration: none;
    color: var(--color-text, #16161a);
  }
`;

const PostMetas = styled('div')`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin: 1rem 0;
  padding: 0 2rem;
  justify-content: flex-start;
  font-size: 0.85em;
  color: var(--color-text, #16161a);
  a {
    text-decoration: none;
    color: var(--color-text, #16161a);
  }
`;

const Tag = styled('div')`
  text-align: center;
  padding: 0.5rem;
  margin-right: 1.5rem;
  margin-bottom: 0.5rem;
  background-color: var(--color-background);
  border-radius: 0.5rem;
`;

const PostDescription = styled('div')`
  margin-top: 1em;
  margin-bottom: 1em;
  padding: 0 2rem;
  p:last-of-type {
    margin: 0;
  }
`;

const Actions = styled('div')`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 2rem 2rem 2rem;
  font-weight: 600;
  color: var(--color-primary, #73abff);
  transition: all 150ms ease-in-out;
`;

const ProjectCardAction = styled(Link)`
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    transition: transform 400ms ease-in-out;
  }
  &:hover {
    color: var(--color-text, #16161a);
    transition: all 150ms ease-in-out;

    span {
      transform: translateX(0px);
      opacity: 1;
      transition: transform 150ms ease-in-out;
    }
  }
`;

const ActionIcons = styled('div')`
  a {
    padding-left: 0.5rem;
  }
`;

const ProjectCardMdx = ({ data }: MdxFrontmatter) => {
  const image = getImage(data.cover);
  const projectUrl = `/${data.slug}`;
  return (
    <ProjectCardContainer>
      <Link to={projectUrl}>
        <ImageContainer>
          <GatsbyImage image={image} alt="cover" />
        </ImageContainer>
      </Link>
      <PostCategory>{data.category}</PostCategory>
      <PostTitle>
        <Link to={projectUrl}>{data.title}</Link>
      </PostTitle>
      <PostDescription>{data.description}</PostDescription>
      <PostMetas>
        <>
          {data.tags.slice(0, 3).map((tag) => (
            <Link to={`/projects/tags/${kebabCase(tag)}`}>
              <Tag>{tag.toUpperCase()}</Tag>
            </Link>
          ))}
        </>
      </PostMetas>
      <Actions>
        <ProjectCardAction to={projectUrl}>
          Details <span>&#8594;</span>
        </ProjectCardAction>
        <ActionIcons>
          {data.extLink && (
            <a
              target="_blank"
              rel="noreferrer"
              href={data.extLink}
              aria-label="link"
              css={css`
                margin-left: 10px;
                color: var(--color-primary, #73abff);
                :hover {
                  color: var(--color-text, #16161a);
                }
              `}
            >
              <PublicIcon />
            </a>
          )}

          {data.githubLink && (
            <a
              target="_blank"
              rel="noreferrer"
              href={data.githubLink}
              aria-label="github"
              css={css`
                margin-left: 10px;
                color: var(--color-primary, #73abff);
                :hover {
                  color: var(--color-text, #16161a);
                }
              `}
            >
              <GitHubIcon />
            </a>
          )}
        </ActionIcons>
      </Actions>
    </ProjectCardContainer>
  );
};

export default ProjectCardMdx;
