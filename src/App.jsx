import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import WelcomePage from "./pages/welcome/welcomePage.jsx";
import MainPage from "./pages/main/mainPage.jsx";
import FundPage from "./pages/fund/fundPage.jsx";
import DefundPage from "./pages/defund/defundPage.jsx";
import TransferPage from "./pages/transfer/transferPage.jsx";
import DashboardPage from "./pages/dashboard";
import LockPage from "./pages/lock";
import LockRequestPage from "./pages/lock-request/index.jsx";
import LockDetailsPage from "./pages/lock-details/index.jsx";

function App() {
  return (
    <div id="app-container">
      <div id="header">
        <a name="logo" href="/">
          <img src="/src/assets/logo.svg" alt="Logo" />

          <h1 className="text-secondary">Bit Box</h1>
        </a>

        <div name="user-info"></div>
      </div>

      <div id="navigator">
        <div id="navigator-container">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/main" element={<MainPage />} />
              <Route path="/fund" element={<FundPage />} />
              <Route path="/defund" element={<DefundPage />} />
              <Route path="/transfer" element={<TransferPage />} />
              <Route path="/lock" element={<LockPage  />} />
              <Route path="/lock-request" element={<LockRequestPage  />} />
              <Route path="/lock/:id" element={<LockDetailsPage id />} />
              <Route path="/addressbook" element={"address book"} />
              <Route path="/wallet" element={"wallet"} />
              <Route path="/transactions" element={"transactions"} />

              <Route path="*" element={"no such route"} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </div>
  );
}

export default App;
