import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./assets/style.css";
import TermsAr from "./TermsAr";
import TermsEn from "./TermsEn";

function LanguageSwitcher() {
  const location = useLocation();

  return (
    <div
      className={`mb-3 ${
        location.pathname === "/ar" ? "text-end" : "text-start"
      }`}
    >
      <Link
        to="/ar"
        className={`btn me-2 ${location.pathname === "/ar" ? "btn-warning" : "btn-secondary"}`}
      >
        عربي
      </Link>
      <Link
        to="/en"
        className={`btn ${location.pathname === "/en" ? "btn-warning" : "btn-secondary"}`}
      >
        English
      </Link>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="container">
        <LanguageSwitcher />
        <Routes>
          <Route path="/" element={<Navigate to="/en" replace />} />
          <Route path="/ar" element={<TermsAr />} />
          <Route path="/en" element={<TermsEn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
