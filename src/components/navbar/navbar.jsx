import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.styles.scss';

import Contact from '../contact/contact';

//import logo
import { ReactComponent as Logo } from '../../logo.svg';


const NavBar = () => {

    const [dropdown, setDropdown] = useState(false);
    ///////
    const [contacts,setContacts]=useState(false);
    const [conversation,setConversation]=useState(false);


    const openMenu = (e) => {
        console.log(e.target.id)

        switch(e.target.id){
            case ("#contact"):
                setContacts(!contacts);
                break;
            case ("#conversation"):
                setConversation(!conversation);
                break;
            default:
                break;
        }

    }

    const openContact=(props)=>{
        setContacts(!contacts)
    }




    return (
        <div className="header">
            <div className="leftNavItems">
                <NavLink className="logo-container" to="/">
                    <Logo />
                </NavLink>

                <NavLink id="#contact" className="navItem" to="#" onClick={openMenu}>
                    Contacts
                </NavLink>
                {contacts&&<Contact />}


                <NavLink id="#conversation" className="navItem" to="#" onClick={openMenu}>
                    Conversations
                </NavLink>
                {conversation && <Contact />}
                {/* TEST CODE HERE */}


                {/* TEST CODE HERE */}

                <NavLink className="navItem" to="#" onClick={openMenu}>
                    Marketing
                </NavLink>

                <NavLink className="navItem" to="#" onClick={openMenu}>
                    Sales
                </NavLink>

                <NavLink className="navItem" to="#" onClick={openMenu}>
                    Service
                </NavLink>

                <NavLink className="navItem" to="#" onClick={openMenu}>
                    Automation
                </NavLink>

                <NavLink className="navItem" to="#" onClick={openMenu}>
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
                <NavLink className="navItem" to="#" onClick={openMenu}>
                    Account
                </NavLink>
            </div>
        </div>
    )
}


export default NavBar;