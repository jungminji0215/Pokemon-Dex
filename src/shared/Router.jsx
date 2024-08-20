import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home.jsx";
import Dex from "../pages/Dex.jsx";
import Detail from "../pages/Detail.jsx";
import { HOME_URL, DETAIL_URL, DEX_URL } from "../utils/path.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<Home />} />
        <Route path={DEX_URL} element={<Dex />} />
        <Route path={DETAIL_URL} element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
