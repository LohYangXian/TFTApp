import React from 'react';
import '../../styles/header/NavBar.css';
import { Link } from 'react-router-dom';


function Navbar() {

    return (
        <nav className='navbar'>
            <ul className='nav-menu'>
                <li className="nav-item inter-bold-h3-white">
                    <Link to="/champions">Champions</Link>
                </li>
                <li className="nav-item inter-bold-h3-white">
                    <Link to="/augments">Augments</Link>
                </li>
                <li className="nav-item inter-bold-h3-white">
                    <Link to="/items">Items</Link>
                </li>
                <li className="nav-item inter-bold-h3-white">
                    <Link to="/profile">Profile Page</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;