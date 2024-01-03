import React, { useState, useEffect, useCallback } from "react";
import PropTypes from "prop-types";
import Item from "./item";
import Cart from "./cart";

export default function Items({ url }) {
    const [items, setItems] = useState([]);

    // cart items
    const [cartItems, setCartItems ] = useState([]);
    const updateQuantity = (id, newQuantity) => {
    const updatedCartItems = cartItems.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
    };
    const removeFromCart = (id) => {
        const updatedCartItems = cartItems.filter(item => item.id !== id);
        setCartItems(updatedCartItems);
    };

    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);

        if (existingItem) {
        const updatedCartItems = cartItems.map(item =>
            item.id === existingItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        setCartItems(updatedCartItems);
        } else {
        setCartItems([...cartItems, { id: product.id, name: product.name, quantity: 1 }]);
        }
    };
    useEffect(() => {
        let ignoreStaleRequest = false;
        console.log("Trying fetch");
        console.log(url);
        fetch(url, { credentials: "same-origin" })
        .then((response) => {
            if (!response.ok) throw Error(response.statusText);
            return response.json();
        })
        .then((data) => {
            if (!ignoreStaleRequest) {
            setItems([...data.results]);
            }
        })
        .catch((error) => {
            console.log(error);
        });

        return () => {
        // This is a cleanup function that runs whenever the Post component
        // unmounts or re-renders. If a Post is about to unmount or re-render, we
        // should avoid updating state.
        ignoreStaleRequest = true;
        };
    }, [url]);

    const itemList = items.map((item) => (
        <li key={item.id}>
        <Item url={item.url} addToCart={addToCart}/>
        </li>
    ));

    return (
        <div className="catalog">
        <h2>Catalog</h2>
        <p>Catalog for all available items</p>
        <ul> {itemList} </ul>
        <Cart 
            cartItems={cartItems}
            updateQuantity={updateQuantity}
            removeFromCart={removeFromCart}
        />
        </div>
    );
}