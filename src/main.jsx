import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Toaster } from "sonner";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
    <Toaster position="top-right" richColors expand={true} />
  </React.StrictMode>
);