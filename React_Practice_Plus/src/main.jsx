import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import InputComponent from "./Components/UseHooks/InputComponent.jsx";
import TextInputWithFocusButton from "./Components/UseHooks/TextInputWithFocusButton.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <InputComponent />
    <TextInputWithFocusButton />
  </React.StrictMode>
);
