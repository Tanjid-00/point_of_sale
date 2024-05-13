import React, { createContext, useEffect, useState } from 'react';

const DataContext = createContext();

const ProductContext = ({ children }) => {
    const [globalData, setGlobalData] = useState();
    useEffect(() => {
        setTimeout(() => {
            fetch('https://dummyjson.com/products')
                .then((res) => {
                    if (!res.ok) {
                        throw Error;
                    } else {
                        return res.json();
                    }
                })
                .then((data) => {
                    setGlobalData(data.products);
                })
                .catch((error) => {
                    console.log('big error');
                });
        }, 10);
    }, []);

    return <DataContext.Provider value={{ globalData }}>{children}</DataContext.Provider>;
};

export { ProductContext, DataContext };
