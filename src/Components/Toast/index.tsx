import React from "react";
import CountdownBar from "@/Components/Toast/CountdownBar";
import * as Icons from "@/StyleConfig/Icons";
import Appearances from "@/StyleConfig/Appearances";
import Style from "@/Components/Toast/Style";
import { IToastComponent } from "@/Interface";

export default function Toast({
  children,
  appearance,
  placement,
  autoDismiss,
  isRunning,
  showCloseButton,
  onDismiss = () => {},
  onMouseEnter,
  onMouseLeave,
}: IToastComponent) {
  const [height, setHeight] = React.useState<string | number>(0);
  const [transitionState, setTransitionState] = React.useState<
    "entering" | "entered" | "exited"
  >("entering");
  const elementRef = React.useRef<HTMLDivElement>(null);
  const Glyph = Appearances[appearance].icon;

  React.useEffect(() => {
    if (transitionState === "entering" && elementRef.current) {
      setHeight(elementRef.current.offsetHeight + 8);
      setTransitionState("entered");
    }
    if (transitionState === "entered") {
      setHeight("auto");
    }
    if (transitionState === "exited") {
      setHeight(0);
    }
  }, [transitionState]);

  return (
    <div
      ref={elementRef}
      className={Style({
        transitionState,
        height,
        appearance,
        placement,
      })}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className="toastContent">
        <div className="iconContainer">
          <CountdownBar opacity={autoDismiss ? 1 : 0} isRunning={isRunning} />
          <div className="icon">
            <Glyph />
          </div>
        </div>
        <div className="content">{children}</div>
        {showCloseButton && onDismiss && (
          <button className="closeButton" onClick={onDismiss}>
            <Icons.ToastClose />
          </button>
        )}
      </div>
    </div>
  );
}
