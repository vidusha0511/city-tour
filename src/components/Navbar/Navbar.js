import React from 'react';

import Logo from '../../images/img/logo.png';

import './Navbar.scss';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img src={Logo} alt="logo"></img>
            <ul className="nav-links">
                <li>
                    <a href="/" className="nav-link">Home</a>
                </li>
                <li>
                    <a href="/" className="nav-link">About</a>
                </li>
                <li>
                    <a href="/" className="nav-link active">Tours</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;