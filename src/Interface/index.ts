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

interface IToastComponent extends IToastStyleConfig {
  children: React.ReactNode;
  autoDismiss: boolean;
  isRunning: boolean;
  showCloseButton: boolean;
  onDismiss?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

interface IToastStyle extends IToastStyleConfig {
  transitionState: string;
  height: number | string;
}

interface IToastController extends IToastStyleConfig {
  children: React.ReactNode;
  autoDismiss: boolean;
  showCloseButton: boolean;
  onDismiss?: () => void;
}

interface IToastContainer {
  children: React.ReactNode;
  placement: keyof typeof Placements;
  hasToasts: boolean;
}

export type {
  IToast,
  IToastState,
  IToastOptions,
  IToastCountdownBar,
  IToastComponent,
  IToastStyle,
  IToastController,
  IToastContainer,
};
