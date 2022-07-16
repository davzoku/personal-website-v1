import React from 'react';
import styled from '@emotion/styled';

const Container = styled('div')`
  padding: 1rem;
`;

const Card = styled('div')`
  background: var(--color-backgroundOffset, #ffffff);
  border: 1px solid var(--color-border, #f5f5ff);
  border-radius: 0.3rem;
  color: var(--color-text, #16161a);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 9px 24px rgba(0, 0, 0, 0.1);
  transition: all 150ms ease-in-out;
  padding: 1rem 1rem 2rem 1rem;
  text-align: center;
`;

export const WIP = () => (
  <Container>
    <Card>
      <h3>👷‍♂️ Work in Progress 🚧</h3>
      <h6>
        This article is developing. I am probably still piecing the fragments of
        ideas in the right places. Feel free to{' '}
        <a
          href="https://twitter.com/intent/tweet?screen_name=davzoku"
          target="_blank"
          rel="noreferrer"
        >
          poke me on Twitter
        </a>
        <span> to finish this piece.</span>
      </h6>
    </Card>
  </Container>
);
