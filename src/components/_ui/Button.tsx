import React, { Component } from 'react';
import styled from '@emotion/styled';
import dimensions from '@styles/dimensions';

const ButtonContainer = styled('button')`
  padding: 1em 2em;
  background: var(--color-primary, #73abff);
  font-weight: 600;
  color: var(--color-textOffset, #f5f5ff);
  outline: none;
  border: none;
  font-size: 1rem;
  border-radius: 0.3rem;
  position: relative;
  transition: background 100ms ease-in-out;

  @media (max-width: ${dimensions.maxwidthMobile}px) {
    padding: 0.8em 1.8em;
    font-size: 1em;
  }

  p {
    margin: 0;
  }

  &:before {
    border-radius: 0.3rem;
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: var(--color-primaryOffset, #3672f8);
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
    background: transparent;
    transition: background 100ms ease-in-out;
  }

  &.Button--secondary {
    background: var(--color-primary, #73abff);
    color: var(--color-textOffset, #f5f5ff);
    padding: 0.95em 1.8em;
    font-size: 0.95rem;

    &:hover {
      background: var(--color-primaryOffset, #3672f8);
      transition: background 100ms ease-in-out;
    }
  }
`;

class Button extends Component {
  render() {
    const { children, ...props } = this.props;
    return (
      <ButtonContainer onClick={this.props.onClick} {...props}>
        {this.props.children}
      </ButtonContainer>
    );
  }
}

export default Button;
