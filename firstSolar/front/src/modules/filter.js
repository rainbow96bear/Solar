import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    setFilter: (state, action) => {
      if (action.payload !== "") {
        return action.payload;
      }
      return state;
    },
  },
});

export const { setFilter } = filterSlice.actions;

export default filterSlice.reducer;
