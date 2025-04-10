import { css } from "@emotion/css";
import Appearances from "@/StyleConfig/Appearances";
import { IToastStyle } from "@/Interface";

export default function Style({
  transitionState,
  height,
  appearance,
  placement,
}: IToastStyle) {
  const isBottom = placement.includes("bottom");
  const key = `${transitionState}${isBottom ? "Bottom" : "Top"}`;
  const tansitionStyle: Record<string, string> = {
    enteringTop: "translateY(-20px)",
    enteringBottom: "translateY(20px)",
  };

  return css`
    height: ${height};
    transform: ${tansitionStyle[key]};
    transition: height 220ms, transform 220ms;

    .toastContent {
      display: flex;
      margin-bottom: 8px;
      max-width: 100%;
      width: 360px;
      color: ${Appearances[appearance].text};
      background-color: ${Appearances[appearance].bg};
      border-radius: 4px;
      box-shadow: 0 3px 8px rgba(0, 0, 0, 0.175);
    }

    .iconContainer {
      position: relative;
      flex-shrink: 0;
      padding: 8px;
      width: 30px;
      text-align: center;
      color: ${Appearances[appearance].bg};
      background-color: ${Appearances[appearance].fg};
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
      overflow: hidden;
    }

    .icon {
      position: relative;
    }

    .content {
      flex-grow: 1;
      padding: 8px;
      font-size: 14px;
      line-height: 1.4;
    }

    .closeButton {
      flex-shrink: 0;
      padding: 8px 12px;
      opacity: 0.5;
      transition: opacity 150ms;
      cursor: pointer;

      &:hover {
        opacity: 1;
      }
    }
  `;
}
