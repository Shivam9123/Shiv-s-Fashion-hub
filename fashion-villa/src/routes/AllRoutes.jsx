import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../products/Home";
import Kids from "../products/Kids";
import Men from "../products/Men";
import NewArrival from "../products/NewArrival";
import Shoes from "../products/Shoes";
import Women from "../products/Women";

const AllRoutes = () => {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/new" element={<NewArrival />}></Route>
        <Route path="/men" element={<Men />}></Route>
        <Route path="/women" element={<Women />}></Route>
        <Route path="/kids" element={<Kids />}></Route>
        <Route path="/shoes" element={<Shoes />}></Route>
        <Route></Route>
      </Routes>
     
    </div>
  );
};

export default AllRoutes;
