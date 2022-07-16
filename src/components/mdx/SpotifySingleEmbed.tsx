import React from 'react';

export interface SpotifySingleEmbedProps {
  src: string;
}

export const SpotifySingleEmbed = ({ src }: SpotifySingleEmbedProps) => (
  <iframe
    src={`${src}?utm_source=generator&theme=0`}
    width="100%"
    height="152"
    frameBorder="0"
    allowFullScreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  />
);
