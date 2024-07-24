// src/components/Main.jsx
import React from 'react';
import NavigationBar from './NavigationBar';
import Footer from './Footer';

const Main = ({ children }) => {
    return (
        <>
            <NavigationBar />
            <div style={{ minHeight: '85vh', marginTop: '6rem', width: '100%' }}>
                {children}
            </div>
            <Footer />
        </>
    );
};

export default Main;
