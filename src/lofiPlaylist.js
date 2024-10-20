import React from "react";
import "./App.css";

const LofiPlaylist = () => {
  return (
    <div>
      <iframe
        title="Lofi Web Player"
        id="player"
        src="https://open.spotify.com/embed/playlist/0vvXsWCC9xrXsKd4FyS8kM?utm_source=generator&theme=0"
        frameBorder="0"
        allowFullScreen
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default LofiPlaylist;
