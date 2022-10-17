import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import RootComponent from "./RootComponent";

const container = document.getElementById("t3-frontend");
const rootEl = createRoot(container);

rootEl.render(
    <BrowserRouter>
        <RootComponent />
    </BrowserRouter>
);
