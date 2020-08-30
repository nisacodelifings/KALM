import React from "react";
import { render } from "react-dom";

import App from "./App";
import Menu from "./Menu";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
    <Menu />
  </React.StrictMode>,
  rootElement
);
