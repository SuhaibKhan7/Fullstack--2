import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, clearCart } from "./redux/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  // get cart data from redux store
  const { items, totalPrice } = useSelector((state) => state.cart);

  return (
    <div>
      <h2>Cart</h2>

      {items.length === 0 && <p>Cart is empty</p>}

      {items.map((item) => (
        <div key={item.id}>
          <p>
            {item.name} - ₹{item.price}
          </p>

          <button onClick={() => dispatch(removeFromCart(item.id))}>
            Remove
          </button>
        </div>
      ))}

      <hr />

      <h3>Total Price: ₹{totalPrice}</h3>

      {items.length > 0 && (
        <button onClick={() => dispatch(clearCart())}>
          Clear Cart
        </button>
      )}
    </div>
  );
}

export default Cart;