import React from "react";
import "./App.css";
import Header from "./components/Header";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Films from "./pages/Films";
import TvShows from "./pages/TvShows";
import NavBar from "./pages/Home";
import Favory from "./pages/Favory";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar></NavBar>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Films />} />
          <Route path="/tv" element={<TvShows />} />
          {/* <Route path="/favory" element={<Favory />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
