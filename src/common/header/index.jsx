import React, { useState } from 'react';
import { FaShoppingCart, FaUser, FaBars, FaTimes, FaHeart } from 'react-icons/fa';
import { RiReactjsLine } from 'react-icons/ri';
import './header.scss';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const itemCount = useSelector((state) => state.cart.itemCount);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <header className="header">
            <div className="container">
                <div className="header__content">
                    <div className="header__logo">
                        <a href="/">
                            <RiReactjsLine className="header__logo-icon" />
                            <span>React-Redux</span>
                        </a>
                    </div>
                    <nav className={`header__nav ${isMenuOpen ? 'header__nav--open' : ''}`}>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/categories">Categories</a></li>
                            <li><a href="/about">About</a></li>
                            <li><a href="/contact">Contact</a></li>
                        </ul>
                    </nav>
                    <div className="header__actions">
                        <NavLink to="/cart" className="header__action-btn shopping">
                            <FaShoppingCart />
                            <span className="header__action-btn-count">{itemCount}</span>
                        </NavLink>
                        <button className="header__action-btn">
                            <FaHeart />
                        </button>
                        <button className="header__action-btn">
                            <FaUser />
                        </button>
                        <button className="header__menu-toggle" onClick={toggleMenu}>
                            {isMenuOpen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
