import React from "react";
import "./App.css";
import Header from "./components/Header";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Films from "./pages/Films";
import TvShows from "./pages/TvShows";
import NavBar from "./pages/Home";

import Search from "./pages/Search";
import Favorys from "./pages/Favorys";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar></NavBar>
        <Routes>
          <Route path="/favorys" element={<Favorys />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Films />} />
          <Route path="/tv" element={<TvShows />} />
          <Route path="/search" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
