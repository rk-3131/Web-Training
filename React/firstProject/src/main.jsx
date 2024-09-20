import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* due to strict mode the app runs and calls props twice */}
    <App />
  </React.StrictMode>
);
