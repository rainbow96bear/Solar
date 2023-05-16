import { createSlice } from "@reduxjs/toolkit";

const connectSlice = createSlice({
  name: "connect",
  initialState: false,
  reducers: {
    setConnect: (state, action) => {
      return action.payload;
    },
  },
});

export const { setConnect } = connectSlice.actions;

export default connectSlice.reducer;
