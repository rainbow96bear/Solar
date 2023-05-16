import { createSlice } from "@reduxjs/toolkit";

const outRedirectModalOpenSlice = createSlice({
  name: "openRedirectModalOpen",
  initialState: { isOpen: false, url: "" },
  reducers: {
    setOutRedirectModalOpen: (state, action) => {
      return {
        ...state,
        isOpen: action.payload.isOpen,
        url: action.payload.url,
      };
    },
  },
});

export const { setOutRedirectModalOpen } = outRedirectModalOpenSlice.actions;
export default outRedirectModalOpenSlice.reducer;
