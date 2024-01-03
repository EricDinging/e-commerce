import React, { useState, useEffect } from "react";

const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
    return (
      <div>
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - Quantity: {item.quantity}
              <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>+</button>
              <button onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}>-</button>
              <button onClick={() => removeFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <p>Total price: $0</p>
        <p>Checkout</p>
      </div>
    );
  };
  
  export default Cart;