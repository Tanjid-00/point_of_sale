/* eslint-disable */

import React, { Children, useState } from 'react';
import style from '../../styles/pages/home.module.css';
import {
    FiClock,
    FiFlag,
    FiMenu,
    FiSearch,
    FiGrid,
    FiBox,
    FiShoppingBag,
    FiShoppingCart,
    FiUser,
    FiCreditCard,
    FiClipboard,
    FiFileText,
    FiRotateCcw,
    FiArchive,
    FiCornerUpLeft,
    FiSettings
} from 'react-icons/fi';
import { BrowserRouter, NavLink } from 'react-router-dom';
// import Logo from '../assets/logo.png';
import Logo from '../../assets/logo.png';

const Home = ({ children }) => {
    const [isToggle, setIsToggle] = useState(false);
    const handleToggle = () => {
        setIsToggle(!isToggle);
    };
    const Links = [
        { name: 'dashboard', link: '/pos_management', icon: <FiGrid /> },
        { name: 'products', link: '/products', icon: <FiBox /> },
        { name: 'pos', link: '/pos', icon: <FiShoppingBag /> },
        { name: 'cart', link: '/cart', icon: <FiShoppingCart /> },
        { name: 'payment', link: '/payment', icon: <FiCreditCard /> },
        { name: 'order', link: '/order', icon: <FiClipboard /> },
        { name: 'receipt', link: '/receipt', icon: <FiFileText /> },
        { name: 'refund', link: '/refund', icon: <FiCornerUpLeft /> },
        { name: 'inventory', link: '/inventory', icon: <FiArchive /> },
        { name: 'reports', link: '/reports', icon: <FiRotateCcw /> },
        { name: 'settings', link: '/settings', icon: <FiSettings /> }
    ];
    return (
        <div className={style.container}>
            <div className={`${style.header} ${isToggle ? style.active : ''}`}>
                <div className={style.logoBar}>
                    <img className={`${style.logo} ${isToggle ? style.showLogo : ''}`} src={Logo} alt="logo" />
                    <FiMenu className={style.menuBtn} onClick={handleToggle} />
                </div>
                <nav className={style.nav}>
                    <div className={`${style.inp} ${isToggle ? style.showInp : ''}`}>
                        <input type="text" name="search" id={style.search} placeholder="search" />
                    </div>
                    <ul>
                        {Links.map((link) => {
                            return (
                                <li key={link.name}>
                                    <NavLink className={style.navlink} to={link.link}>
                                        <span className={style.navIcon}>{link.icon}</span> <span id={style.linkName}>{link.name}</span>
                                    </NavLink>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            </div>

            <div className={`${style.main} ${isToggle ? style.mainChange : ''}`}>{children}</div>
        </div>
    );
};

export default Home;
