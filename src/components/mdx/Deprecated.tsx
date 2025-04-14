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

export const Deprecated = ({ reason }) => (
  <Container>
    <Card>
      <h3>⚠️ Deprecated Project ⚠️</h3>
      <h6>
        This project is no longer maintained and may not work as expected.
        {reason && (
          <p>
            <strong>Reason:</strong> {reason}
          </p>
        )}
      </h6>
    </Card>
  </Container>
);
