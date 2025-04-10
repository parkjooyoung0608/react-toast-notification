import Appearances from "@/StyleConfig/Appearances";
import Placements from "@/StyleConfig/Placements";

interface IToastStyleConfig {
  appearance: keyof typeof Appearances;
  placement: keyof typeof Placements;
}

interface IToast extends IToastStyleConfig {
  id: string;
  content: React.ReactNode;
  autoDismiss?: boolean;
  showCloseButton?: boolean;
}

interface IToastState {
  toasts: IToast[];
}

interface IToastOptions extends IToastStyleConfig {
  autoDismiss?: boolean;
  showCloseButton?: boolean;
}
interface IToastCountdownBar {
  opacity: number;
  isRunning: boolean;
}

export type { IToast, IToastState, IToastOptions, IToastCountdownBar };
