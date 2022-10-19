import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Home from "./pages/Home";
import Company from "./pages/Company";
import ContentMenu from "./pages/ContentMenu";

export default function App() {
  return (
    <Router>
      <Routes> 
        <Route path="/" element={<Home/>} />
        <Route path="/companies/:id" element={<Company/>} />
        <Route path="/info" element={<ContentMenu/>} />
      </Routes>
    </Router>
  );
}
