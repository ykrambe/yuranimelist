"use client";
import { XCircle } from "@phosphor-icons/react";
import React, { useState } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleVideoPlayer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: "300",
    height: "250",
  };

  const VideoPlayer = () => {
    return (
      <div className="fixed bottom-3 right-3">
        <button
          className="text-color-primary float-right"
          onClick={handleVideoPlayer}
        >
          <XCircle size={32} />
        </button>
        <YouTube
          videoId={youtubeId}
          onReady={(event) => event.target.pauseVideo()}
          opts={option}
        />
      </div>
    );
  };

  const ButtonShowTrailer = () => {
    return (
      <button
        className="fixed bottom-5 right-5 w-32 bg-color-primary text-color-dark text-xl hover:bg-color-accent"
        onClick={handleVideoPlayer}
      >
        tonton trailer
      </button>
    );
  };

  return isOpen ? <VideoPlayer /> : <ButtonShowTrailer />;
};

export default VideoPlayer;
