// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul className="header-list">
                    <li className="header-item">
                        <Link to="/" className="header-link">Home</Link>
                    </li>
                    <li className="header-item">
                        <Link to="/contacts" className="header-link">Contacts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
