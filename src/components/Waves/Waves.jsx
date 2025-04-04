import { useState, useEffect } from "react";

export default function Waves() {
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleAudioState = (event) => {
      setIsPlaying(event.detail.isPlaying);
    };

    window.addEventListener("audioStateChange", handleAudioState);
    return () =>
      window.removeEventListener("audioStateChange", handleAudioState);
  }, []);

  const waves = Array.from({ length: 8 }, (_, index) => ({
    begin: `${index * 0.5}s`,
    key: index,
  }));

  const commonCircleProps = {
    r: "20",
    fill: "none",
    stroke: "var(--waves-color)",
    strokeWidth: "1.5",
    opacity: "0",
  };

  const commonAnimationProps = {
    dur: "4s",
    repeatCount: "indefinite",
  };

  return (
    <div className={`waves-wrapper ${isPlaying ? "is-playing" : ""}`}>
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
      >
        <g id="waveGroup" transform="translate(250, 250)">
          {waves.map(({ begin, key }) => (
            <circle {...commonCircleProps} key={key}>
              <animate
                attributeName="r"
                values="0;20;40;60;80;100;120;140;160;180;200;220;240"
                begin={begin}
                {...commonAnimationProps}
              />
              <animate
                attributeName="opacity"
                values="0;1;0.9;0.8;0.7;0.6;0.5;0.4;0.3;0.2;0.1;0"
                begin={begin}
                {...commonAnimationProps}
              />
              <animate
                attributeName="stroke-width"
                values="1.5;1.2;0.9;0.6;0.3"
                begin={begin}
                {...commonAnimationProps}
              />
            </circle>
          ))}

          <circle
            r="4"
            fill="var(--waves-color)"
            opacity={isPlaying ? "1" : "0"}
          >
            <animate
              attributeName="opacity"
              values="0.5;1;0.5"
              dur="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="r"
              values="3;5;3"
              dur="2s"
              repeatCount="indefinite"
            />
          </circle>
        </g>
      </svg>
    </div>
  );
}
