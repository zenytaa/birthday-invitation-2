import { useEffect, useRef, useState } from "react";
import styled, { keyframes } from "styled-components";

import muteSound from "../assets/mute.svg";
import unmuteSound from "../assets/unmute.svg";
import { Image } from "./Image";

const pressAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(1);
  }
`;

const PlayBackButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  align-self: center;
  position: fixed;
  bottom: 30px;
  left: 20px;
  z-index: 999;
  opacity: 0.7;
  border: none;
  cursor: pointer;

  @media (min-width: 769px) {
    right: 40px;
    height: 60px;
    width: 60px;
  }

  &:active {
    animation: ${pressAnimation} 0.2s ease-in-out;
  }
`;

const BackgroundMusic = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  const audioRef = useRef(null);

  useEffect(() => {
    if (isPlaying && audioRef.current) {
      audioRef.current.play().catch((e) => {
        console.error("Playback error:", e);
      });
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
    }
  }, [isMuted]);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  const handleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <>
      {!isPlaying && (
        <PlayBackButton onClick={handlePlay}>
          <Image style={{ height: "70%" }} src={muteSound} />
        </PlayBackButton>
      )}
      {isPlaying && (
        <PlayBackButton onClick={handleMute}>
          {isMuted ? (
            <Image style={{ height: "70%" }} src={muteSound} />
          ) : (
            <Image style={{ height: "70%" }} src={unmuteSound} />
          )}
        </PlayBackButton>
      )}
      <audio ref={audioRef} loop>
        <source src={src} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
};

export default BackgroundMusic;
