import { ProductList } from "./ProductList/ProductList";
import { Header } from "./Header/Header";
import { CartList } from "./CartList/CartList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="cartList" element={<CartList />} />
      </Routes>
    </>
  );
}

export default App;
