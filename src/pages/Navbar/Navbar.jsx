import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar({ cartx }) {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div className='navbar'>
            <div className="logo">
                <img src="https://th.bing.com/th/id/OIP.oAWKt64M-_LnWWYGSljEIwHaE9?rs=1&pid=ImgDetMain" alt="Logo" />
                <span>Online Event Management</span>
            </div>
            <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </div>
            <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
                <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
                <li><Link to="/Eventlist" onClick={() => setIsOpen(false)}>Event list</Link></li>
                <li><Link to="/Filterevent" onClick={() => setIsOpen(false)}>Search event</Link></li>
                <li>
                    <Link to="/Cartevents" onClick={() => setIsOpen(false)}>
                        <img src="https://static.vecteezy.com/system/resources/previews/000/500/447/original/shopping-cart-icon-design-vector.jpg" alt="Cart" />
                        <span>{cartx}</span>
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Navbar;
