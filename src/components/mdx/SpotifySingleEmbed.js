import React from "react"

export const SpotifySingleEmbed = (props) => {
  return (
    <iframe
      src={`${props.src}?utm_source=generator&theme=0`}
      width="100%"
      height="152"
      frameBorder="0"
      allowfullscreen=""
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    ></iframe>
  )
}
