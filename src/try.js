// GlobalProductContext.js
import React, { createContext, useState, useEffect } from 'react';

const GlobalProductContext = createContext();

export const GlobalProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // Fetch products from the API
        fetch('your_api_endpoint_here')
            .then((response) => response.json())
            .then((data) => setProducts(data))
            .catch((error) => console.error('Error fetching products:', error));
    }, []);

    return <GlobalProductContext.Provider value={{ products }}>{children}</GlobalProductContext.Provider>;
};

export default GlobalProductContext;
