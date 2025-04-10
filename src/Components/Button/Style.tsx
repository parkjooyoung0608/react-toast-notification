import { css } from "@emotion/css";
import Appearances from "@/StyleConfig/Appearances";
import Color from "@/StyleConfig/Colors";

export default function Style(appearance: keyof typeof Appearances) {
  const appearanceStyles: Record<
    keyof typeof Appearances,
    { bg: string; hoverBg: string }
  > = {
    error: { bg: Color.Red, hoverBg: Color.Red80 },
    success: { bg: Color.Green, hoverBg: Color.Green80 },
    warning: { bg: Color.Yellow, hoverBg: Color.Yellow80 },
    info: { bg: Color.Blue, hoverBg: Color.Blue80 },
  };
  const { bg, hoverBg } = appearanceStyles[appearance];

  return css`
    display: block;
    margin: 10px;
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    font-size: 14px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    transition: background-color 0.2s ease-in-out, transform 0.1s ease-in-out;
    background-color: ${bg};

    &:hover {
      background-color: ${hoverBg};
      opacity: 0.9;
    }

    &:active {
      transform: scale(0.95);
    }
  `;
}
