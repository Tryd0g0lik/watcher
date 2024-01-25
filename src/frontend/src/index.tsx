import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import fun from "./functions.ts";

const root = document.getElementById("root");
if ((root !== null) && (root !== undefined)) {
  createRoot(root).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
fun(7);
