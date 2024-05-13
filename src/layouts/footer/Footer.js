import React from 'react';
import style from '../../styles/layouts/footer.module.css';

const Footer = () => {
    const crntYear = new Date().getFullYear();
    return (
        <div className={style.footer}>
            <p>&copy; {crntYear} Developed by Tanjidul Islam</p>

            <p>&#x260E; ++88019039957**</p>
            <p>&#x2709;tanjid3656@gmail.com</p>
        </div>
    );
};

export default Footer;
