import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import axios from "axios";
import store from "./modules/store.js";

import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";

import { BrowserRouter, useLocation } from "react-router-dom";
import { ThemeProvider } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import awsconfig from "./aws-exports";

import "@aws-amplify/ui-react/styles.css";
import { studioTheme } from "./ui-components";
Amplify.configure(awsconfig);

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ThemeProvider theme={studioTheme}>
    <BrowserRouter>
      <Provider store={store}>
        <ScrollToTop />
        <App />
      </Provider>
    </BrowserRouter>
  </ThemeProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
