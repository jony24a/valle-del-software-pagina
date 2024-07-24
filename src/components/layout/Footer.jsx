import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-white p-4 text-center mt-10">
            <div className="container mx-auto">
                <p className="text-sm text-black font-bold">
                    © {new Date().getFullYear()} Ing. Software - 7
                </p>
            </div>
        </footer>
    );
};

export default Footer;
