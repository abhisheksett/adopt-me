import React from "react";
import { hydrate } from "react-dom";
import App from "./App";

// All browser-only code goes here

hydrate(<App />, document.getElementById("root"));
