import React, { useEffect } from "react";
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
import Protected from "./components/Protected";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <NavBar></NavBar>
        <Routes>
          <Route
            path="/favorys"
            element={
              <Protected>
                <Favorys />
              </Protected>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/film" element={<Films />} />
          <Route path="/tv" element={<TvShows />} />
          <Route path="/" element={<Search />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
