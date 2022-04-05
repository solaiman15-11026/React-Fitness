import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <div className='menubar'>
            <Link className='manubar-item' to='/'>Home</Link>
            <Link className='manubar-item' to='/review'>Review</Link>
            <Link className='manubar-item' to='/dashboard'>Dashboard</Link>
            <Link className='manubar-item' to='/about'>About</Link>
            <Link className='manubar-item' to='/blog'>Blog</Link>
        </div>
    );
};

export default Header;