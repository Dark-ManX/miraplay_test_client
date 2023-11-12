import React from "react";
import ReactDOM from "react-dom/client";
import "./fonts/PPNeueMachina-InktrapRegular.otf";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </BrowserRouter>
  </Provider>
);
