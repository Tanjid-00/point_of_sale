/*eslint-disable*/

// import React, { useContext } from 'react';
// import Product from '../productPage/Products';
// import style from '../../styles/pages/pos/pos.module.css';
// import { CartContext } from '../../hooks/CartContext';
// import { v4 as uuidv4 } from 'uuid';

// const Pos = () => {
//     const { cart, addToCart, removeFromCart } = useContext(CartContext);
//     console.log(cart);

//     return (
//         <div className={style.container}>
//             <div className={style.left}>
//                 <Product />
//             </div>
//             <div className={style.cart}>
//                 <h3>Cart</h3>
//                 {cart.map((product) => {
//                     const { id, title } = product;
//                     return (
//                         <div key={uuidv4()}>
//                             <h3>{title}</h3>
//                             <button onClick={() => removeFromCart(id)}>X</button>
//                         </div>
//                     );
//                 })}
//             </div>
//         </div>
//     );
// };

// export default Pos;

import React, { useContext } from 'react';
import Product from '../productPage/Products';
import style from '../../styles/pages/pos/pos.module.css';
import { CartContext } from '../../hooks/CartContext';

const Pos = () => {
    const { cart, addToCart, removeFromCart } = useContext(CartContext);

    // Function to calculate the quantity of each product in the cart
    const calculateQuantity = (productId) => {
        return cart.filter((product) => product.id === productId).length;
    };

    return (
        <div className={style.container}>
            <div className={style.left}>
                <Product />
            </div>
            <div className={style.cart}>
                <h3>Cart</h3>
                {/* Use Set to get unique product IDs */}
                {Array.from(new Set(cart.map((product) => product.id))).map((productId) => {
                    const product = cart.find((item) => item.id === productId);
                    return (
                        <div key={productId}>
                            <p>{product.title}</p>

                            <button onClick={() => removeFromCart(productId - 1)}>-</button>
                            <button onClick={() => addToCart(product)}>+</button>
                            <p> {calculateQuantity(productId)}</p>
                            <button onClick={() => removeFromCart(productId)}>Remove</button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Pos;
