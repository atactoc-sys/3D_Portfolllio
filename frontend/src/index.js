import React from "react";
import ReactDOM from "react-dom"; // Import ReactDOM from "react-dom"
import App from "./App";
import { Provider } from "react-redux";
import store from "./Store.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);