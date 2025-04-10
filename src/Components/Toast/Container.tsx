import { css, cx } from "@emotion/css";
import Placements from "@/StyleConfig/Placements";
import { IToastContainer } from "@/Interface";

export default function Container({
  children,
  placement,
  hasToasts,
}: IToastContainer) {
  const toastContainerStyle = (hasToasts: boolean) => css`
    box-sizing: border-box;
    max-height: 100%;
    max-width: 100%;
    overflow: hidden;
    padding: 8px;
    pointer-events: ${hasToasts ? "auto" : "none"};
    position: fixed;
    z-index: 1000;
  `;

  return (
    <div className={cx(toastContainerStyle(hasToasts), Placements[placement])}>
      {children}
    </div>
  );
}
