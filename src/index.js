import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import Menu from "./Menu";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
    <Menu />
  </React.StrictMode>,
  rootElement
);
