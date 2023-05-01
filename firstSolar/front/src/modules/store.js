import { configureStore } from "@reduxjs/toolkit";
import { reducer as isLoadingReducer } from "./isLoading.js";
import { reducer as connectReducer } from "./connect.js";
import { reducer as accountReducer } from "./account.js";
import { reducer as loginReducer } from "./login.js";
import pageIndexReducer from "./pageIndex.js";
import filterReducer from "./filter.js";
import emptySearchReducer from "./emptySearch.js";

const store = configureStore({
  reducer: {
    isLoading: isLoadingReducer,
    account: accountReducer,
    connect: connectReducer,
    login: loginReducer,
    pageIndex: pageIndexReducer,
    filter: filterReducer,
    emptySearch: emptySearchReducer,
  },
});

export default store;
