/* eslint-disable */
import React from 'react';
import style from '../../styles/layouts/header.module.css';
import { FiPlus, FiUser, FiLock, FiLogOut, FiGlobe } from 'react-icons/fi';
import Logo from '../../assets/logo.png';

import Profile from '../../assets/profile.jpg';

const Header = () => {
    return (
        <div>
            <div className={style.pageHeader}>
                <div className={style.left}>
                    <div>
                        <a className={style.iconBox} href="">
                            <FiPlus className={style.icons} id={style.plusIcon} />
                        </a>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.profile}>
                        <details>
                            <summary>
                                <img className={style.profileIcon} src={Profile} alt="profileIcon" />
                            </summary>
                            <div className={style.card}>
                                <div className={style.up}>
                                    <img className={style.profilePic} src={Profile} alt="profilePic" />
                                    <h2>Tanjidul Islam</h2>
                                    <p>0tanjid0@gmail.com</p>
                                </div>
                                <hr />
                                <div className={style.down}>
                                    <li>
                                        <span>
                                            <FiUser />
                                        </span>
                                        <p>Profile</p>
                                    </li>
                                    <li>
                                        <span>
                                            <FiLock />
                                        </span>
                                        <p>Change Password</p>
                                    </li>
                                    <li>
                                        <span>
                                            <FiGlobe />
                                        </span>
                                        <p>Change Language</p>
                                    </li>
                                    <li>
                                        <span>
                                            <FiLogOut />
                                        </span>
                                        <p>Logout</p>
                                    </li>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
