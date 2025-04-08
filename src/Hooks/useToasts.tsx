import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/Store";
import {
  addToast,
  removeToast,
  removeAllToasts,
  updateToast,
} from "@/Redux/Slice";
import { IToast, IToastOptions } from "@/Interface";

export const useToasts = () => {
  const dispatch = useDispatch();
  const toastStack = useSelector((state: RootState) => state.toast.toasts);

  return {
    addToast: (content: React.ReactNode, options: IToastOptions) => {
      dispatch(addToast({ content, ...options }));
    },
    removeToast: (id: string) => {
      dispatch(removeToast(id));
    },
    removeAllToasts: () => {
      dispatch(removeAllToasts());
    },
    updateToast: (id: string, changes: Partial<Omit<IToast, "id">>) => {
      dispatch(updateToast({ id, changes }));
    },
    toastStack,
  };
};
