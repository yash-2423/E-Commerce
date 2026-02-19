import React from "react";
import { Routes, Route } from "react-router-dom";



import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Contact from "./pages/Contact";

import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

import Pagenotfound from "./pages/Pagenotfound";

function App() {
  return (
    <Routes>

        {/* Home */}
        <Route path="/"element={<Home />} />

        {/* Other pages */}
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />

        {/* Auth pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* 404 page */}
        <Route path="*" element={<Pagenotfound />} />

      

    </Routes>
  );
}

export default App;
