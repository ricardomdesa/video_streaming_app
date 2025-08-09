import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import KeyCloakService from "./helpers/KeycloakService";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// const root = ReactDOM.createRoot(
//   document.getElementById('root') as HTMLElement
// );
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const renderApp = function () {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App keycloakInstance={KeyCloakService.GetInstance()} />
    </React.StrictMode>
  );
};

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
KeyCloakService.CallLogin(renderApp);
reportWebVitals();
