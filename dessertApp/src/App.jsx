import { useState } from "react";

import Cards from "./cards";
import Cart from "./cart";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(product) {
    setCart([...cart, product]);
  }

  function deleteFromCart(indexToDelete) {
    setCart(
      cart.filter((item, index) => index !== indexToDelete)
    );
  }

  function confirmOrder() {
    alert("Your order is confirmed");
    setCart([]);
  }

  return (
    <>
      <div className="container">
        <Cards addToCart={addToCart} />

        <Cart
          cart={cart}
          deleteFromCart={deleteFromCart}
          confirmOrder={confirmOrder}
        />
      </div>
    </>
  );
}
export default App;