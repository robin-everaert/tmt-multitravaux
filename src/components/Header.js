import React from 'react';

import NavBar from "./NavBar";

const Header = () => {
    return (
        <header id='header'>
            <div className="container-logo-header d-flex justify-content-center align-items-center p-3">
                <img src="./img/logo.png" alt="Le logo de TMT Multitravaux" />
            </div>

            <NavBar />
        </header>
    );
};

export default Header;