import React, { useState } from 'react';
import style from '../../styles/pages/product/searchBar.module.css';

const SearchBar = (props) => {
    const { products, setFilteredProducts } = props;
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = (e) => {
        const searchTerm = e.target.value.toLowerCase();
        setSearchTerm(searchTerm);

        const filteredProducts = products.filter((product) => {
            return product.title.toLowerCase().includes(searchTerm);
        });

        setFilteredProducts(filteredProducts);
    };
    return (
        <div className={style.inpField}>
            <input placeholder="Search here..." className={style.inp} type="search" value={searchTerm} onChange={handleSearch} />
        </div>
    );
};

export default SearchBar;
