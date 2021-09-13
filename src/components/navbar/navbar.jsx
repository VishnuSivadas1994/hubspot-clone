import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

import './navbar.styles.scss';


//import logo
import { ReactComponent as Logo } from '../../logo.svg';

import Contact from '../contact/contact';
import Conversation from '../conversation/conversation';
import Marketing from '../marketing/marketing';


const NavBar = () => {

    ///////


    return (
        <div className="header">
            <div className="leftNavItems">
                <NavLink className="logo-container" to="/">
                    <Logo />
                </NavLink>

                <NavLink className="navItem" to="#">

                    Contacts
                <div className="navItemDropdown">
                        <Contact />
                    </div>
                </NavLink>

                <NavLink className="navItem" to="#">
                    Conversations
                    <div className="navItemDropdown">
                        <Conversation />
                    </div>
                </NavLink>

                <NavLink className="navItem" to="#" >
                    Marketing
                    <div className="navItemDropdown">
                        <Marketing />
                    </div>
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