import React from "react";
import { HashRouter, Routes, Route, NavLink } from "react-router";

import HomePage from "./page";
import AboutPage from "./about/page";

const AppRoutes = () => {
  return (
    <HashRouter>
      <div>
        <nav className="fixed bg-white z-10 inset-x-0 ">
          <div className="start gap-3">
            <NavLink to="/" end>
              Home
            </NavLink>
            <NavLink to="/about" end>
              About
            </NavLink>
          </div>
        </nav>
        <main className="pt-4">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
      </div>
    </HashRouter>
  );
};

export default AppRoutes;
