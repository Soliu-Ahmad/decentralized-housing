import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

// Create the context
export const BuyPropertyContext = createContext();

const BuyPropertyProvider = ({ children }) => {
    const [buyPropertyStatus, setBuyPropertyStatus] = useState(() => {
        const savedStatus = localStorage.getItem('buyArtStatus');
        return savedStatus ? JSON.parse(savedStatus) : {};
    });

    const [isBuyClicked, setIsBuyClicked] = useState(false);

    useEffect(() => {
        const saveBuyProperty = async () => {
            try {
                await axios.post('http://localhost:5000/api/buyPropertyStatus', buyPropertyStatus);
            } catch (err) {
                console.error('Failed to save buy Property status: ', err);
            }
        };

        saveBuyProperty();
    }, [buyPropertyStatus]);

    return (
        <BuyPropertyContext.Provider value={{ buyPropertyStatus, setBuyPropertyStatus, isBuyClicked, setIsBuyClicked }}>
            {children}
        </BuyPropertyContext.Provider>
    );
};

export default BuyPropertyProvider;
