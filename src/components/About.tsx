import React from 'react';
import styled from '@emotion/styled';
import dimensions from '@styles/dimensions';
import { StaticImage } from 'gatsby-plugin-image';

const AboutContainer = styled('div')`
  display: flex;
  flex-direction: row;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    flex-direction: column;
  }
`;

const AboutPhoto = styled('div')`
  margin: auto;
`;

const AboutBio = styled('div')`
  margin: auto;
  padding: 2rem;
  a {
    font-weight: 600;
    color: var(--color-primary, #73abff);
    box-shadow: inset 0 -2px 0 0 var(--color-primary, #73abff);
    border-bottom: 1px solid var(--color-primary, #73abff);
    text-decoration: none;
    transition: all 150ms ease-in-out;
  }

  a:hover {
    color: var(--color-background, #ffffff);
    box-shadow: inset 0 -1.25em 0 0 var(--color-primary, #73abff);
    border-bottom-color: var(--color-primary, #73abff);
    outline: 0;
    text-decoration: none;
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;
  }
  li {
    position: relative;
    margin-bottom: 10px;
    padding-left: 20px;
    font-size: 0.85em;
    &:before {
      content: '▹';
      position: absolute;
      left: 0;
      color: var(--color-primary, #73abff);
      font-size: 1.5em;
      line-height: 18px;
    }
  }

  @media (max-width: ${dimensions.maxwidthTablet}px) {
    padding: 0rem;
  }

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    ul {
      display: grid;
      grid-template-columns: 1fr;
      padding: 0;
      margin: 20px 0 0 0;
      overflow: hidden;
      list-style: none;
    }
  }
`;

const AboutLinkContainer = styled('div')`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 20%;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    display: none;
  }
`;

const AboutLink = styled('a')`
  margin-bottom: 1.5em;
  font-weight: 600;
  line-height: 1.9;
  text-decoration: none;
  color: var(--color-text, #16161a);

  span {
    margin-left: 1em;
    transform: translateX(-8px);
    display: inline-block;
    opacity: 0;
    transition: all 400ms ease-in-out;
  }

  &:hover {
    span {
      transform: translateX(0px);
      opacity: 1;
      transition: all 150ms ease-in-out;
    }
  }
`;

const skills = [
  'Python',
  'Java',
  'Javascript',
  'Spring Framework',
  'React.js',
  'AWS',
];

const bioLinks = new Map([
  ['Twitter', 'https://twitter.com/davzoku'],
  ['Instagram', 'https://www.instagram.com/drawwithwalter/'],
  ['Github', 'https://github.com/davzoku'],
  ['Linkedin', 'https://www.linkedin.com/in/tengkokwai/'],
  ['Polywork', 'https://www.polywork.com/walterteng'],
  ['Credly', 'https://credly.com/users/waltertengkw/badges'],
]);

const About = () => (
  <AboutContainer>
    <AboutPhoto>
      <StaticImage
        className="img"
        src="../images/profile-photo-circle-duo-640.png"
        width={500}
        quality={95}
        placeholder="blurred"
        formats={['auto', 'webp', 'avif']}
        alt="Profile Photo"
      />
    </AboutPhoto>
    <AboutBio>
      <p>
        Hi! My name is Walter. I'm a software engineer with a focus on
        delivering business value through technology. I am delighted to have
        opportunities in my career to helping my clients in the government,
        healthcare, and legal sectors improve their digital experiences.
      </p>

      <p>
        I am currently pursuing my{' '}
        <a href="https://scis.smu.edu.sg/master-it-business/artificial-intelligence-track/curriculum">
          graduate studies
        </a>{' '}
        in Artificial Intelligence and business. I seek to develop innovative
        solutions that can help solve complex problems at the intersections of
        business, AI and software engineering.
      </p>

      <p>
        Over here in my <a href="#garden">digital garden</a>, I write about how
        I make my life 1% easier as a software engineer, summarize books I read,
        and occasionally describe my learning process for making digital
        illustrations with my iPad.
      </p>

      <p>Here are a few technologies that I've been working with recently:</p>
      <ul>{skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
    </AboutBio>
    <AboutLinkContainer>
      {[...bioLinks].map((item) => {
        const name = item[0];
        const link = item[1];
        return (
          <AboutLink href={link} target="_blank" rel="noopener noreferrer">
            {name}
            <span>&#8594;</span>
          </AboutLink>
        );
      })}
    </AboutLinkContainer>
  </AboutContainer>
);

export default About;
