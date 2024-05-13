/*eslint-disable*/
import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import style from '../../styles/pages/product/singleProduct.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

const SingleProduct = () => {
    const { id } = useParams();
    const location = useLocation();
    return (
        <div id={style.container}>
            <div className={style.left}>
                <div className={style.title}>
                    <h2>{location.state.title}</h2>
                    <p className={style.brand}>{location.state.brand}</p>
                    <p className={style.category}>{location.state.category}</p>
                </div>
                <div className={style.gallery}>
                    <div className={style.imgSlider}>
                        {location.state.images.map((image) => {
                            return <img key={uuidv4()} className={style.img} src={image} alt="product" />;
                        })}
                    </div>
                </div>
            </div>

            <div className={style.right}>
                <h3>{location.state.description}</h3>
                <p className={style.rating}>
                    User Rating: {location.state.rating}{' '}
                    <span className={style.icon}>
                        <FontAwesomeIcon icon={faStar} />
                    </span>{' '}
                </p>
                <p className={style.stock}>
                    Available: {location.state.stock} <span style={{ color: 'green', fontWeight: 'bold' }}>in stock</span>{' '}
                </p>
                <p className={style.price}>
                    Price: ${location.state.price} <span className={style.discount}>{location.state.discountPercentage}% off</span>
                </p>

                <div className={style.buttons}>
                    <button>Add to Cart</button>
                    <button>Sale now</button>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
