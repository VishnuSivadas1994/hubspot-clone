import React from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.styles.scss';

//import logo
import {ReactComponent as Logo} from '../../logo.svg';

const NavBar = () => {


    return (
        <div className="header">
            <div className="options1">
                <NavLink className="logo-container" to="/">
                    <Logo/>
                </NavLink>

                <NavLink className="option" to="/contacts">
                    Contacts
                </NavLink>

                <NavLink className="option" to="/conversations">
                    Conversations
                </NavLink>

                <NavLink className="option" to="/marketing">
                    Marketing
                </NavLink>

                <NavLink className="option" to="/sales">
                    Sales
                </NavLink>

                <NavLink className="option" to="/service">
                    Service
                </NavLink>

                <NavLink className="option" to="/automation">
                    Automation
                </NavLink>

                <NavLink className="option" to="/reports">
                    Reports
                </NavLink>
            </div>

            <div className="options2">
                <NavLink className="option" to="/marketplace">
                    Marketplace
                </NavLink>

                <NavLink className="option" to="/settings">
                    Settings
                </NavLink>

                <NavLink className="option" to="/notifications">
                    Notifications
                </NavLink>
                <span className="tool-divider"></span>
                <NavLink className="option" to="/account">
                    Account
                </NavLink>
            </div>
        </div>
    )
}


export default NavBar;