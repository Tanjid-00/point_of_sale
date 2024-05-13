import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import style from '../styles/actions/addDelete.module.css';
import Delete from '../assets/other/delete.png';

import AddToCart from '../assets/navMenu/shopping-cart.png';

const AddDelete = (props) => {
    const { onDeleteItem, onAddItem } = props;
    return (
        <div className={style.action}>
            {/* <FontAwesomeIcon onClick={onAddItem} className={style.icon} id={style.add} icon={faShoppingCart} />
            <FontAwesomeIcon onClick={onDeleteItem} className={style.icon} id={style.delete} icon={faTrash} /> */}
            <img src={AddToCart} onClick={onAddItem} alt="addToCart" className={style.icon} id={style.add} />
            <img src={Delete} onClick={onDeleteItem} alt="delete" className={style.icon} id={style.delete} />
        </div>
    );
};

export default AddDelete;
