/*eslint-disable*/
import React, { useContext, useEffect, useState } from 'react';
import style from '../../styles/pages/product/product.module.css';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import AddDelete from '../../actions/AddDelete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../../hooks/CartContext';
import Cart from '../../assets/navMenu/shopping-cart.png';
import Details from '../../assets/other/info.png';
const Product = () => {
    const [filteredProducts, setFilteredProducts] = useState([]);
    const { globalData, cart, addToCart } = useContext(CartContext);
    const [count, setCount] = useState(0);

    const truncateString = (str, num) => {
        if (str.length > num) {
            return str.slice(0, num);
        } else {
            return str;
        }
    };
    useEffect(() => {
        setFilteredProducts(globalData); // Initialize filteredProducts with all products
    }, [globalData]);

    const handleDelete = (id) => {
        const filteredItems = filteredProducts.filter((item) => item.id !== id);
        setFilteredProducts(filteredItems);
        toast(`item has deleted`);
    };
    return (
        <div id={style.container}>
            <div className={style.searchCart}>
                <SearchBar className={style.inpField} products={globalData} setFilteredProducts={setFilteredProducts} />

                <button className={style.cart}>
                    <img className={style.cartIcon} src={Cart} alt="cart" />
                    <h4 className={style.itemsQuantity}> {cart.length} items</h4>
                </button>
            </div>
            {filteredProducts ? (
                <table className={style.table}>
                    <thead className={style.thead}>
                        <tr>
                            <th className={style.sl}>SL</th>
                            <th>Image</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody className={style.tbody}>
                        {filteredProducts.map((product) => {
                            const { id, title, description, discountPercentage, brand, category, price, rating, stock, images } = product;
                            return (
                                <tr key={title}>
                                    <td className={style.sl}>{id}</td>
                                    <td>
                                        <img className={style.image} src={images[0]} alt="Product demo" />{' '}
                                    </td>
                                    <td>
                                        <abbr className={style.abbr} title={title}>
                                            {truncateString(title, 10)}
                                        </abbr>
                                    </td>
                                    <td className={style.price}>{price}$</td>
                                    <td className={style.actionBar}>
                                        <div className={style.action}>
                                            <Link to={`/singleProduct/${id}`} state={{ id, title, description, brand, category, discountPercentage, price, rating, stock, images }}>
                                                {/* <FontAwesomeIcon className={style.icon} id={style.eye} icon={faEye} /> */}
                                                <img src={Details} alt="details" className={style.icon} id={style.eye} />
                                            </Link>
                                            <AddDelete id={id} title={title} onAddItem={() => addToCart(id)} onDeleteItem={() => handleDelete(id)} />
                                        </div>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            ) : (
                <h3>Products are loading...</h3>
            )}
            <ToastContainer />
        </div>
    );
};

export default Product;
