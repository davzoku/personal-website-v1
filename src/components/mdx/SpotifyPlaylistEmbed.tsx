import React from 'react';

export interface SpotifyPlaylistEmbedProps {
  src: string;
}

export const SpotifyPlaylistEmbed = ({ src }: SpotifyPlaylistEmbedProps) => (
  <iframe
    src={`${src}?utm_source=generator&theme=0`}
    width="100%"
    height="380"
    frameBorder="0"
    allowFullScreen=""
    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  />
);
