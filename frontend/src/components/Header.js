import React from 'react';
import '../styles/components/Header.css';
import NavItem from './NavItem';

const Header = ({ isLoggedIn, user }) => {
    return (
        <header className="header">
            <h1 className='logo'>Vegas Fun</h1> {/* TODO: When clicked, go to homepage */}
            <nav>
                <ul className="nav-list">
                    <NavItem isLoggedIn={isLoggedIn} user={user} />
                </ul>
            </nav>
        </header>
    );
}

export default Header;