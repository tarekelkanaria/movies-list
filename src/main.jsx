import React from "react";
import ReactDOM from "react-dom/client";
import MoviesProvider from "./store/MoviesProvider";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MoviesProvider>
      <App />
    </MoviesProvider>
  </React.StrictMode>
);
