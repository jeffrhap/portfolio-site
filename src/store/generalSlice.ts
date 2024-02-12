import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "./store";

const initialState: any = {
  canvasInView: true,
};

export const generalSlice = createSlice({
  name: "General",
  initialState,
  reducers: {
    updateCanvasInView: (state, action: PayloadAction<boolean>) => {
      state.canvasInView = action.payload;
    },
  },
});

export const { updateCanvasInView } = generalSlice.actions;

export const getCanvasInView = (state: RootState) => state.general.canvasInView;

export default generalSlice.reducer;
