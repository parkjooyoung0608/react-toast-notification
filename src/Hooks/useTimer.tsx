import React from "react";

export const useTimer = (callback: () => void, delay: number) => {
  const timerRef = React.useRef<NodeJS.Timeout | null>(null);
  const startRef = React.useRef<number>(Date.now());
  const remainingRef = React.useRef<number>(delay);

  const start = () => {
    startRef.current = Date.now();
    timerRef.current = setTimeout(callback, remainingRef.current);
  };

  const pause = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
      remainingRef.current -= Date.now() - startRef.current;
    }
  };

  const resume = () => {
    start();
  };

  const clear = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  React.useEffect(() => {
    if (delay !== Infinity) {
      start();
    }
    return clear;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [delay]);

  return { pause, resume, clear };
};
