/* eslint-disable */

import { React, useState } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import style from './app.module.css';
import Home from './layouts/homeLayout/Home';
import Pos from './pages/posPage/Pos';
import Dashboard from './pages/dashboardPage/Dashboard';
import Products from './pages/productPage/Products';
import Header from './layouts/header/Header';
import SingleProduct from './pages/productPage/SingleProduct';
import Login from './pages/signup/Login';
import Protected from './layouts/homeLayout/Protected';
import Error from './layouts/errorPage/Error';
import Footer from './layouts/footer/Footer';
import { ProductContext } from './hooks/ProductContext';
import Cart from './pages/cart/Cart';
import { elements } from 'chart.js';
import { CartProvider } from './hooks/CartContext';

const App = () => {
    return (
        <div className={style.container}>
            <BrowserRouter>
                <ProductContext>
                    <CartProvider>
                        <Home>
                            <Header />
                            <div className={style.pageContent}>
                                <Routes>
                                    <Route path="/" element={<Dashboard />} />
                                    <Route path="/products" element={<Products />} />
                                    <Route path="/singleProduct/:id" element={<SingleProduct />} />
                                    <Route path="/point_of_sale" element={<Pos />} />
                                    <Route path="/cart" element={<Cart />} />
                                    <Route path="/*" element={<Error />} />
                                </Routes>
                            </div>
                            {/* <Footer /> */}
                        </Home>
                    </CartProvider>
                </ProductContext>
            </BrowserRouter>
        </div>
    );
};

export default App;
