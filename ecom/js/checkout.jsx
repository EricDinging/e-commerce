import React, { useState, useEffect } from "react";

const Checkout = () => {
    const [userInfo, setUserInfo] = useState("");
    const [shippingAddress, setShippingAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [msg, setMsg] = useState("")

    const handleCheckout = () => {
      const checkoutData = {
        userInfo,
        shippingAddress,
        paymentMethod
      };
      
      // Send checkout data to the server
      fetch('/api/v1/cart/checkout/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(checkoutData),
      })
      .then(response => response.json())
      .then(data => {
        setMsg(data.message);
      })
      .catch(error => {
        console.error('Error during checkout:', error);
        // Handle error or display an error message to the user
      });
    };
  
    return (
      <div>
        <h2>Checkout</h2>
        <form>
          <label>
            Name:
            <input type="text" onChange={(e) => setUserInfo(e.target.value)} />
          </label>
  
          <label>
            Address:
            <input type="text" onChange={(e) => setShippingAddress(e.target.value)} />
          </label>
  
          {/* Payment Method */}
          <label>
            Payment Method:
            <input type="text" onChange={(e) => setPaymentMethod(e.target.value)} />
          </label>
  
          <button type="button" onClick={handleCheckout}>
            Complete Checkout
          </button>
        </form>
        <p>Status: {msg}</p>
      </div>
    );
  };
  
  export default Checkout;