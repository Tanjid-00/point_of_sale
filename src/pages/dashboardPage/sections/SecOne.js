/* eslint-disable */

import React from 'react';
import style from '../../../styles/pages/dashboard/sections/secOne.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag, faShoppingBasket, faShoppingCart, faDollar, faMinus, faArrowRight, faArrowLeft, faBagShopping } from '@fortawesome/free-solid-svg-icons';

const SecOne = () => {
    return (
        <div className={style.container}>
            <div id={style.one} className={style.box}>
                <FontAwesomeIcon className={style.icon} icon={faShoppingBag} />

                <div className={style.titleBox}>
                    <h2 className={style.amount}>$ 234.4B </h2>
                    <p className={style.title}>Sales</p>
                </div>
            </div>
            <div id={style.two} className={style.box}>
                <FontAwesomeIcon className={style.icon} icon={faShoppingCart} />

                <div className={style.titleBox}>
                    <h2 className={style.amount}>$ 234.4B </h2>
                    <p className={style.title}>Purchases</p>
                </div>
            </div>
            <div id={style.three} className={style.box}>
                <FontAwesomeIcon className={style.icon} icon={faArrowRight} />

                <div className={style.titleBox}>
                    <h2 className={style.amount}>$ 234.4B </h2>
                    <p className={style.title}>Sales Returns</p>
                </div>
            </div>
            <div id={style.four} className={style.box}>
                <FontAwesomeIcon className={style.icon} icon={faArrowLeft} />

                <div className={style.titleBox}>
                    <h2 className={style.amount}>$ 234.4B </h2>
                    <p className={style.title}>Purchases Returns</p>
                </div>
            </div>
            <div id={style.five} className={style.box}>
                <FontAwesomeIcon className={style.icon} icon={faDollar} />

                <div className={style.titleBox}>
                    <h2 className={style.amount}>$ 234.4B </h2>
                    <p className={style.title}>Today Total Sales</p>
                </div>
            </div>
            <div id={style.six} className={style.box}>
                <FontAwesomeIcon className={style.icon} icon={faBagShopping} />

                <div className={style.titleBox}>
                    <h2 className={style.amount}>$ 234.4B </h2>
                    <p className={style.title}>Today Total received sales</p>
                </div>
            </div>
            <div id={style.seven} className={style.box}>
                <FontAwesomeIcon className={style.icon} icon={faShoppingCart} />

                <div className={style.titleBox}>
                    <h2 className={style.amount}>$ 234.4B </h2>
                    <p className={style.title}>Today Total Purchases</p>
                </div>
            </div>
            <div id={style.eight} className={style.box}>
                <FontAwesomeIcon className={style.icon} icon={faMinus} />

                <div className={style.titleBox}>
                    <h2 className={style.amount}>$ 234.4B </h2>
                    <p className={style.title}>Today Total Expenses</p>
                </div>
            </div>
        </div>
    );
};

export default SecOne;
