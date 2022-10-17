import React from "react";
import { createRoot } from "react-dom/client";
import RootComponent from "./RootComponent";

const container = document.getElementById("t3-wrapper");
// const container = document.getElementById("tic-toc-toe-ui");
const rootEl = createRoot(container);

rootEl.render(<RootComponent />);
