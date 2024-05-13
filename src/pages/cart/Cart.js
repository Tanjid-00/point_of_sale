import React, { useContext } from 'react';
import { CartContext } from '../../hooks/CartContext';
import { v4 as uuidv4 } from 'uuid';
import style from '../../styles/cart/cart.module.css';

const Cart = () => {
    const { cart, removeFromCart } = useContext(CartContext);

    return (
        <div>
            <h1>Shopping cart</h1>
            {cart.map((product) => {
                const { id, title } = product;
                return (
                    <div key={uuidv4()} className={style.product}>
                        <li>{title}</li>
                        <button onClick={() => removeFromCart(id)}>X</button>
                    </div>
                );
            })}
        </div>
    );
};

export default Cart;
