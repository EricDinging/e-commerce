import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Item from "./item";

// Create a root
const root = createRoot(document.getElementById("reactEntry"));

// This method is only called once
// Insert the post component into the DOM
root.render(
  <StrictMode>
    <Item url="/api/v1/item/1" />
  </StrictMode>
);