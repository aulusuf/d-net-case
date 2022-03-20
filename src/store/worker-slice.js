import { createSlice } from "@reduxjs/toolkit";

const workerSlice = createSlice({
  name: "worker",
  initialState: {
    opened: false,
    selectedWorker: [],
  },
  reducers: {
    toggleWorker: (state, action) => {
      state.opened = !state.opened;
    },
    setWorker: (state, action) => {
      state.selectedWorker = action.payload;
    },
  },
});

export const workerActions = workerSlice.actions;
export default workerSlice;
