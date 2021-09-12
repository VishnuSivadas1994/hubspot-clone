import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import OutsideClickHandler from 'react-outside-click-handler';

import './navbar.styles.scss';

import Contact from '../contact/contact';

//import logo
import { ReactComponent as Logo } from '../../logo.svg';
import Conversation from '../conversation/conversation';


const NavBar = () => {

    ///////
    const [open, setOpen] = useState(false);
    const toggle = () => setOpen(!open);





    return (
        <div className="header">
            <div className="leftNavItems">
                <NavLink className="logo-container" to="/">
                    <Logo />
                </NavLink>

                <NavLink id="#contact" className="navItem" to="#" onMouseOver={() => toggle(!open)} onMouseLeave={() => toggle(!open)}>
                    Contacts
                {
                    open && (
                        <Contact />
                    )
                }
                </NavLink>


                <NavLink id="#conversation" className="navItem" to="#" onMouseOver={() => toggle(!open)} onMouseLeave={() => toggle(!open)}>
                    Conversations
                {
                    open && (
                        <Conversation />
                    )
                }
                </NavLink>
                {/* TEST CODE HERE */}


                {/* TEST CODE HERE */}

                <NavLink className="navItem" to="#" >
                    Marketing
                </NavLink>

                <NavLink className="navItem" to="#" >
                    Sales
                </NavLink>

                <NavLink className="navItem" to="#" >
                    Service
                </NavLink>

                <NavLink className="navItem" to="#" >
                    Automation
                </NavLink>

                <NavLink className="navItem" to="#" >
                    Reports
                </NavLink>
            </div>

            <div className="rightNavItems">
                <NavLink className="navItem" to="/marketplace">
                    Marketplace
                </NavLink>

                <NavLink className="navItem" to="/settings">
                    Settings
                </NavLink>

                <NavLink className="navItem" to="/notifications">
                    Notifications
                </NavLink>
                <span className="tool-divider"></span>
                <NavLink className="navItem" to="#" >
                    Account
                </NavLink>
            </div>
        </div>
    )
}

export default NavBar;