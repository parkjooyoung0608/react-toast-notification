import generateUEID from "@/Utils/generateUEID";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToast, IToastState } from "@/Interface";

const initialState: IToastState = {
  toasts: [],
};

const Slice = createSlice({
  name: "toasts",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<Omit<IToast, "id">>) => {
      const id = generateUEID();
      state.toasts.push({ id, ...action.payload });
    },
    removeToast: (state, action: PayloadAction<string>) => {
      state.toasts = state.toasts.filter(
        (toast) => toast.id !== action.payload
      );
    },
    removeAllToasts: (state) => {
      state.toasts = [];
    },
    updateToast: (
      state,
      action: PayloadAction<{ id: string; changes: Partial<IToast> }>
    ) => {
      state.toasts = state.toasts.map((toast) =>
        toast.id === action.payload.id
          ? { ...toast, ...action.payload.changes }
          : toast
      );
    },
  },
});

export const { addToast, removeToast, removeAllToasts, updateToast } =
  Slice.actions;
export const toastReducer = Slice.reducer;
export default toastReducer;
