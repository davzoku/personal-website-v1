import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Img = styled.img`
  max-width: 100%;
`;

export interface BasicImageProps {
  src: string;
  alt: string;
  width: string;
  maxwidth: string;
  margin: string;
  padding: string;
  link: string;
}

export const BasicImage = ({
  src,
  alt,
  width,
  maxwidth,
  margin,
  padding,
  link,
}: BasicImageProps) => {
  if (link)
    return (
      <div align="center">
        <a href={link} target="_blank" rel="noreferrer">
          <img
            css={css({
              width: width || '100%',
              maxWidth: maxwidth || '1200px',
              display: 'block',
              margin: margin || '0',
              padding: padding || '1rem 0',
              borderRadius: '4px',
            })}
            src={src}
            alt={alt}
          />
        </a>
      </div>
    );
  return (
    <div align="center">
      <img
        css={css({
          width: width || '100%',
          maxWidth: maxwidth || '1200px',
          display: 'block',
          margin: margin || '0',
          padding: padding || '1rem 0',
          borderRadius: '4px',
        })}
        src={src}
        alt={alt}
      />
    </div>
  );
};
