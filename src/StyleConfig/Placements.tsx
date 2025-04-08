import { css } from "@emotion/css";

const Placements = {
  "top-left": css`
    top: 0;
    left: 0;
  `,
  "top-center": css`
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  `,
  "top-right": css`
    top: 0;
    right: 0;
  `,
  "bottom-left": css`
    bottom: 0;
    left: 0;
  `,
  "bottom-center": css`
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
  `,
  "bottom-right": css`
    bottom: 0;
    right: 0;
  `,
};

export default Placements;
