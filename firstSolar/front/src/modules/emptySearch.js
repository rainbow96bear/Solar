import { createSlice } from "@reduxjs/toolkit";

const emptySearchSlice = createSlice({
  name: "emptySearch",
  initialState: "",
  reducers: {
    setEmptySearch: (state, action) => {
      if (action.payload !== "") {
        return action.payload;
      }
      return state;
    },
  },
});

export const { setEmptySearch } = emptySearchSlice.actions;

export default emptySearchSlice.reducer;
