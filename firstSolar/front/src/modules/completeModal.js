import { createSlice } from "@reduxjs/toolkit";

const completeModalSlice = createSlice({
  name: "completeModal",
  initialState: false,
  reducers: {
    setCompleteModal: (state, action) => {
      if (action.payload !== "") {
        return action.payload;
      }
      return state;
    },
  },
});

export const { setCompleteModal } = completeModalSlice.actions;

export default completeModalSlice.reducer;
