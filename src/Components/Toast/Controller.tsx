import React from "react";
import { useTimer } from "@/Hooks/useTimer";
import Toast from "@/Components/Toast";
import { IToastController } from "@/Interface";

export default function Controller({
  children,
  appearance,
  placement,
  autoDismiss = false,
  showCloseButton,
  onDismiss = () => {},
}: IToastController) {
  const { pause, resume, clear } = useTimer(
    onDismiss,
    autoDismiss ? 5000 : Infinity
  );
  const [isRunning, setIsRunning] = React.useState<boolean>(autoDismiss);

  const onMouseEnter = () => {
    setIsRunning(false);
    pause();
  };

  const onMouseLeave = () => {
    setIsRunning(true);
    resume();
  };

  const handleMouseEnter = autoDismiss ? onMouseEnter : () => {};
  const handleMouseLeave = autoDismiss ? onMouseLeave : () => {};

  React.useEffect(() => {
    if (autoDismiss) {
      setIsRunning(true);
      return;
    }
    clear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoDismiss]);

  return (
    <Toast
      children={children}
      appearance={appearance}
      placement={placement}
      autoDismiss={autoDismiss}
      onDismiss={onDismiss}
      isRunning={isRunning}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      showCloseButton={showCloseButton}
    />
  );
}
