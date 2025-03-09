import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// import App from "./App.jsx";

import "bootstrap/dist/css/bootstrap.min.css"; // 確保 CSS 正確載入
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // 載入 Bootstrap JS
import { RouterProvider } from "react-router-dom";
import router from "./router";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
