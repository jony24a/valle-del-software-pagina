import React from 'react';

const NavigationBar = () => {
    return (
        <div className='w-full flex justify-center'>
            <nav className="nav text-black py-4 fixed top-0 w-5/6 mt-4 rounded-3xl shadow-lg mx-auto" style={{ backgroundColor: "#fff" }}>
                <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <img src="/logo.png" alt="logo" className="w-14 h-12" />
                        <div className="text-2xl font-semibold text-black flex">
                            Valle Del Software
                        </div>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex space-x-4">
                            <li>
                                <span className="mx-2 font-bold custom_btn_menu">
                                    Inicio
                                </span>
                            </li>
                            <li>
                                <span className="mx-2 font-bold custom_btn_menu">
                                    Servicios
                                </span>
                            </li>
                            <li>
                                <span className="mx-2 font-bold custom_btn_menu">
                                    Nosotros
                                </span>
                            </li>
                            <li>
                                <span className="mx-2 font-bold custom_btn_menu">
                                    Contacto
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;
