import { css, keyframes } from "@emotion/css";
import { IToastCountdownBar } from "@/Interface";

export default function CountdownBar({
  opacity,
  isRunning,
}: IToastCountdownBar) {
  const shrinkKeyframes = keyframes`
        from { height: 100%; }
        to { height: 0%; }
    `;

  return (
    <div
      className={css`
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        animation: ${shrinkKeyframes} 5000ms linear;
        animation-play-state: ${isRunning ? "running" : "paused"};
        background-color: rgba(0, 0, 0, 0.1);
        opacity: ${opacity};
      `}
    />
  );
}
