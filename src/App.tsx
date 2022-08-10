import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Layout from "./layout/Layout";
import Category from "./pages/category/category";
import Main from "./pages/main";
import Product from "./pages/product/product";
import Products from "./pages/product/products";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Navigate replace to="/main" />} />
          <Route path="main" element={<Main />} />
          <Route path="products" element={<Products />} />
          <Route path="/:category" element={<Category />} />
          <Route path="/:category/:product" element={<Product />} />
        </Route>
        <Route path="*" element={<Navigate to="/chat" replace />} />
      </Routes>
    </BrowserRouter >
  );
}

export default App;
