import { configureStore } from "@reduxjs/toolkit";
import isLoadingReducer from "./isLoading.js";
import connectReducer from "./connect.js";
import accountReducer from "./account.js";
import loginReducer from "./login.js";
import pageIndexReducer from "./pageIndex.js";
import filterReducer from "./filter.js";
import emptySearchReducer from "./emptySearch.js";
import completeModalReducer from "./completeModal.js";
import outRedirectModalOpenReducer from "./outRedirectModalOpen.js";

const store = configureStore({
  reducer: {
    isLoading: isLoadingReducer,
    account: accountReducer,
    connect: connectReducer,
    login: loginReducer,
    pageIndex: pageIndexReducer,
    filter: filterReducer,
    emptySearch: emptySearchReducer,
    completeModal: completeModalReducer,
    outRedirectModalOpen: outRedirectModalOpenReducer,
  },
});

export default store;
