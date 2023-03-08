import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "../src/common/header/Header";
import "./App.css";
import Cart from "./common/Cart/Cart";
import Data from "./components/flashDeals/Data";
import Sdata from "./components/shop/Sdata";
import Pages from "./pages/Pages";

function App() {
  const { productItems } = Data;
  const { shopItems } = Sdata;
  const [cartItem, setCartItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCartItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  const decreaseQty = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit.qty === 1) {
      setCartItem(cartItem.filter((item) => item.id !== product.id));
    } else {
      setCartItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty - 1 }
            : item
        )
      );
    }
  };

  return (
    <>
      <BrowserRouter>
        <Header cartItem={cartItem} />
        <Routes>
          <Route
            path="/"
            element={
              <Pages
                productItems={productItems}
                addToCart={addToCart}
                shopItems={shopItems}
              />
            }
          ></Route>
          <Route
            path="/cart"
            element={
              <Cart
                addToCart={addToCart}
                cartItem={cartItem}
                decreaseQty={decreaseQty}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
