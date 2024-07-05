import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import InputComponent from "./Components/UseHooks/InputComponent.jsx";
import RegisterForm from "./Components/UseHooks/RegisterForm.jsx";
import TextInputWithFocusButton from "./Components/UseHooks/TextInputWithFocusButton.jsx";
import Parent from "./Components/ManagingStateInReact/Parent.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <Parent />
    {/* <InputComponent />
    <RegisterForm />
    <TextInputWithFocusButton /> */}
  </React.StrictMode>
);
