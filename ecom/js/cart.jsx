import React, { useState, useEffect } from "react";


const Cart = ({ cartItems, updateQuantity, removeFromCart }) => {
    const [total, setTotal] = useState(0);
    
    const getTotal = () => {
      let ignoreStaleRequest = false;
  
      const handleResponse = (data) => {
        if (!ignoreStaleRequest) {
          setTotal(data.total);
        }
      };
  
      fetch("/api/v1/cart/total/", { credentials: "same-origin" })
        .then((response) => {
          if (!response.ok) throw Error(response.statusText);
          return response.json();
        })
        .then(handleResponse)
        .catch((error) => {
          console.log(error);
        });
  
      // Set ignoreStaleRequest to true when the component unmounts
      return () => {
        ignoreStaleRequest = true;
      };
    };

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
        <p>Total price: ${total} <button onClick={() => getTotal()}>get price</button></p>
      </div>
    );
  };
  
  export default Cart;