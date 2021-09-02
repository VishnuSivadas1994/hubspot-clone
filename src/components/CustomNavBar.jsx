import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './CustomButton';
import './CustomNavBar.styles.scss';
import CustomDropdown from './CustomDropdown';


const NavBar = () => {

    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div>
            <nav className='navbar'>
                <Link to='/' className='navbar-logo'>
                    LOGO
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {/* <i className={click ? 'fas fa-times' : 'fas fa-bars'} /> */}
                    DD
                </div>
            </nav>
        </div>
    )
}

export default NavBar;