export default function Waves() {
  return (
    <div className="waves-wrapper">
      <svg
        className="waves"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
      >
        <g id="waveGroup" transform="translate(250, 250)">
          <circle r="20" fill="none" stroke="white" strokeWidth="1.5">
            <animate
              attributeName="r"
              values="0;20;40;60;80;100;120;140;160;180;200;220;240"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.9;0.8;0.7;0.6;0.5;0.4;0.3;0.2;0.1;0"
              dur="4s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="1.5;1.2;0.9;0.6;0.3"
              dur="4s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="20" fill="none" stroke="white" strokeWidth="1.5">
            <animate
              attributeName="r"
              values="0;20;40;60;80;100;120;140;160;180;200;220;240"
              dur="4s"
              begin="0.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.9;0.8;0.7;0.6;0.5;0.4;0.3;0.2;0.1;0"
              dur="4s"
              begin="0.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="1.5;1.2;0.9;0.6;0.3"
              dur="4s"
              begin="0.5s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="20" fill="none" stroke="white" strokeWidth="1.5">
            <animate
              attributeName="r"
              values="0;20;40;60;80;100;120;140;160;180;200;220;240"
              dur="4s"
              begin="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.9;0.8;0.7;0.6;0.5;0.4;0.3;0.2;0.1;0"
              dur="4s"
              begin="1s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="1.5;1.2;0.9;0.6;0.3"
              dur="4s"
              begin="1s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="20" fill="none" stroke="white" strokeWidth="1.5">
            <animate
              attributeName="r"
              values="0;20;40;60;80;100;120;140;160;180;200;220;240"
              dur="4s"
              begin="1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.9;0.8;0.7;0.6;0.5;0.4;0.3;0.2;0.1;0"
              dur="4s"
              begin="1.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="1.5;1.2;0.9;0.6;0.3"
              dur="4s"
              begin="1.5s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="20" fill="none" stroke="white" strokeWidth="1.5">
            <animate
              attributeName="r"
              values="0;20;40;60;80;100;120;140;160;180;200;220;240"
              dur="4s"
              begin="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.9;0.8;0.7;0.6;0.5;0.4;0.3;0.2;0.1;0"
              dur="4s"
              begin="2s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="1.5;1.2;0.9;0.6;0.3"
              dur="4s"
              begin="2s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="20" fill="none" stroke="white" strokeWidth="1.5">
            <animate
              attributeName="r"
              values="0;20;40;60;80;100;120;140;160;180;200;220;240"
              dur="4s"
              begin="2.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.9;0.8;0.7;0.6;0.5;0.4;0.3;0.2;0.1;0"
              dur="4s"
              begin="2.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="1.5;1.2;0.9;0.6;0.3"
              dur="4s"
              begin="2.5s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="20" fill="none" stroke="white" strokeWidth="1.5">
            <animate
              attributeName="r"
              values="0;20;40;60;80;100;120;140;160;180;200;220;240"
              dur="4s"
              begin="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.9;0.8;0.7;0.6;0.5;0.4;0.3;0.2;0.1;0"
              dur="4s"
              begin="3s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="1.5;1.2;0.9;0.6;0.3"
              dur="4s"
              begin="3s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="20" fill="none" stroke="white" strokeWidth="1.5">
            <animate
              attributeName="r"
              values="0;20;40;60;80;100;120;140;160;180;200;220;240"
              dur="4s"
              begin="3.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="1;0.9;0.8;0.7;0.6;0.5;0.4;0.3;0.2;0.1;0"
              dur="4s"
              begin="3.5s"
              repeatCount="indefinite"
            />
            <animate
              attributeName="stroke-width"
              values="1.5;1.2;0.9;0.6;0.3"
              dur="4s"
              begin="3.5s"
              repeatCount="indefinite"
            />
          </circle>

          <circle r="4" fill="white">
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
