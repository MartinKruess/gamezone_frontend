import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { CelestAbyssNewArticle, GlobalShopFilter, UserProvider } from "./global/useContext";
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Router>
    <GlobalShopFilter >
      <UserProvider >
        <CelestAbyssNewArticle>
          <App />
        </CelestAbyssNewArticle>
      </UserProvider>
    </GlobalShopFilter>
  </Router>
);
