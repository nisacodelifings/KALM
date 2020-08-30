import React from "react";
import { render } from "react-dom";

import App from "./App";
import Contents from "./Contents";

const rootElement = document.getElementById("root");
render(
  <React.StrictMode>
    <App />
    <Contents />
  </React.StrictMode>,
  rootElement
);
