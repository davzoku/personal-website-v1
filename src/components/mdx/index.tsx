// ------------- General Components--------------- //
import React from 'react';
import { BasicImage, BasicImageProps } from './ImageStyles';
import { WIP } from './WIP';
import {
  SpotifySingleEmbed,
  SpotifySingleEmbedProps,
} from './SpotifySingleEmbed';
import {
  SpotifyPlaylistEmbed,
  SpotifyPlaylistEmbedProps,
} from './SpotifyPlaylistEmbed';

// ------------- Single Use Components--------------- //

// ------------- Exports--------------- //
export default {
  // ------------- General Components--------------- //
  BasicImage: (props: BasicImageProps) => <BasicImage {...props} />,
  WIP: (props) => <WIP {...props} />,
  SpotifySingleEmbed: (props: SpotifySingleEmbedProps) => (
    <SpotifySingleEmbed {...props} />
  ),
  SpotifyPlaylistEmbed: (props: SpotifyPlaylistEmbedProps) => (
    <SpotifyPlaylistEmbed {...props} />
  ),
  // ------------- Single Use Components--------------- //
};
