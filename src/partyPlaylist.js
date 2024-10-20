import React from "react";
import "./App.css";

const PartyPlaylist = () => {
  return (
    <div>
      <iframe
        title="Party Web Player"
        id="player"
        src="https://open.spotify.com/embed/playlist/37i9dQZF1DXaXB8fQg7xif?utm_source=generator&theme=0"
        frameBorder="0"
        allowfullscreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default PartyPlaylist;
