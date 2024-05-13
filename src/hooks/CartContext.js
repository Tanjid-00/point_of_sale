import React, { createContext, useContext, useState } from 'react';
import { DataContext } from './ProductContext';
const CartContext = createContext();

const CartProvider = ({ children }) => {
    const { globalData } = useContext(DataContext);
    const [cart, setCart] = useState([]);
    const addToCart = (productId) => {
        const productToAdd = globalData.find((product) => product.id === productId);
        setCart([...cart, productToAdd]);
    };
    const removeFromCart = (productId) => {
        const updatedCart = cart.filter((product) => product.id !== productId);
        setCart(updatedCart);
    };

    return <CartContext.Provider value={{ globalData, cart, addToCart, removeFromCart }}>{children}</CartContext.Provider>;
};

export { CartProvider, CartContext };
