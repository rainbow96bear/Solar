import { createSlice } from "@reduxjs/toolkit";

const pageIndexSlice = createSlice({
  name: "pageIndex",
  initialState: 1,
  reducers: {
    setPageIndex: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPageIndex } = pageIndexSlice.actions;
export default pageIndexSlice.reducer;
