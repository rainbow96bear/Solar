import { configureStore } from "@reduxjs/toolkit";
import { reducer as isLoadingReducer } from "./isLoading.js";
import { reducer as connectReducer } from "./connect.js";
import { reducer as accountReducer } from "./account.js";

const store = configureStore({
  reducer: {
    isLoading: isLoadingReducer,
    account: accountReducer,
    connect: connectReducer,
  },
});

export default store;
