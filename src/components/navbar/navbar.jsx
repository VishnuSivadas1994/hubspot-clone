import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.styles.scss';

//import logo
import {ReactComponent as Logo} from '../../logo.svg';

const NavBar = () => {


    return (
        <div className="header">
            <div className="leftNavItems">
                <NavLink className="logo-container" to="/">
                    <Logo/>
                </NavLink>

                <NavLink className="navItem" to="/contacts">
                    Contacts
                </NavLink>

                <NavLink className="navItem" to="/conversations">
                    Conversations
                </NavLink>

                <NavLink className="navItem" to="/marketing">
                    Marketing
                </NavLink>

                <NavLink className="navItem" to="/sales">
                    Sales
                </NavLink>

                <NavLink className="navItem" to="/service">
                    Service
                </NavLink>

                <NavLink className="navItem" to="/automation">
                    Automation
                </NavLink>

                <NavLink className="navItem" to="/reports">
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
                <NavLink className="navItem" to="/account">
                    Account
                </NavLink>
            </div>
        </div>
    )
}


export default NavBar;