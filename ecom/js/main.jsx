import React, { useState, useEffect, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Items from "./items";

// Create a root
const root = createRoot(document.getElementById("reactEntry"));

// This method is only called once
// Insert the post component into the DOM



root.render(
  <StrictMode>
    <Items url="/api/v1/item"/>
  </StrictMode>
);