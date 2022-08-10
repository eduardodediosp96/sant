import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { CartProvider } from "./common/context/CartProvider";
import Layout from "./layout/Layout";
import Cart from "./pages/cart/cart";
import Category from "./pages/category/category";
import Main from "./pages/main";
import Product from "./pages/product/product";
import Products from "./pages/product/products";


function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<Navigate replace to="/main" />} />
            <Route path="main" element={<Main />} />
            <Route path="products" element={<Products />} />
            <Route path="cart" element={<Cart />} />
            <Route path="/:category" element={<Category />} />
            <Route path="/:category/:product" element={<Product />} />
          </Route>
          <Route path="*" element={<Navigate to="/chat" replace />} />
        </Routes>
      </BrowserRouter >
    </CartProvider>
  );
}

export default App;
