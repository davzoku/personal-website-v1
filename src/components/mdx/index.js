// ------------- General Components--------------- //
import React from "react"
import { BasicImage } from "./ImageStyles"
import { WIP } from "./WIP"
import { SpotifySingleEmbed } from "./SpotifySingleEmbed"
import { SpotifyPlaylistEmbed } from "./SpotifyPlaylistEmbed"

// ------------- Single Use Components--------------- //

// ------------- Exports--------------- //
export default {
  // ------------- General Components--------------- //
  BasicImage: (props) => <BasicImage {...props} />,
  WIP: (props) => <WIP {...props} />,
  SpotifySingleEmbed: (props) => <SpotifySingleEmbed {...props} />,
  SpotifyPlaylistEmbed: (props) => <SpotifyPlaylistEmbed {...props} />,
  // ------------- Single Use Components--------------- //
}
