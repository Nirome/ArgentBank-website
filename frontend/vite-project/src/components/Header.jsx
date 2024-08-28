import React from 'react';
import logo from '../assets/images/logo.webp';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img src={logo} className='main-nav-logo-image' alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
        <div>
          <NavLink className="main-nav-item" to="/sign-in">
            <FontAwesomeIcon icon={faCircleUser} className='fa fa-user-circle'/>
            Sign in 
          </NavLink>
        </div>
    </nav>
  );
};

export default Header;