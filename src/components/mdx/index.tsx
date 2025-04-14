// ------------- General Components--------------- //
import React from 'react';
import { BasicImage, BasicImageProps } from './ImageStyles';
import { WIP } from './WIP';
import { Deprecated } from './Deprecated';
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
  Deprecated: (props) => <Deprecated {...props} />,
  SpotifySingleEmbed: (props: SpotifySingleEmbedProps) => (
    <SpotifySingleEmbed {...props} />
  ),
  SpotifyPlaylistEmbed: (props: SpotifyPlaylistEmbedProps) => (
    <SpotifyPlaylistEmbed {...props} />
  ),
  // ------------- Single Use Components--------------- //
};
