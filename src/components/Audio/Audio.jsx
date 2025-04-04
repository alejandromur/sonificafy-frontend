import { useRef, useEffect } from "react";

const audioStateEvent = new CustomEvent("audioStateChange", {
  bubbles: true,
  detail: {
    isPlaying: false,
  },
});

export default function Audio({ src }) {
  const audioRef = useRef(null);

  useEffect(() => {
    const audioElement = audioRef.current;

    if (!audioElement) return;

    const handlePlay = () => {
      audioStateEvent.detail.isPlaying = true;
      audioElement.dispatchEvent(audioStateEvent);
    };

    const handlePause = () => {
      audioStateEvent.detail.isPlaying = false;
      audioElement.dispatchEvent(audioStateEvent);
    };

    audioElement.addEventListener("play", handlePlay);
    audioElement.addEventListener("pause", handlePause);

    return () => {
      audioElement.removeEventListener("play", handlePlay);
      audioElement.removeEventListener("pause", handlePause);
    };
  }, []);

  return (
    <audio ref={audioRef} controls>
      <source src={src} type="audio/wav" />
      Your browser don't support audio files
    </audio>
  );
}
