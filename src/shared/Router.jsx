import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Dex from "../pages/Dex.jsx";
import PokemonDetail from "../pages/PokemonDetail.jsx";
import { HOME_URL, DETAIL_URL, DEX_URL } from "../utils/path.js";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME_URL} element={<Home />} />
        <Route path={DEX_URL} element={<Dex />} />
        <Route path={DETAIL_URL + "/:id"} element={<PokemonDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
