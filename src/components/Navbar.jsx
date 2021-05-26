import Nav from '../styled-components/Navbar';
import React from 'react';
import AppLogo from '../assets/icons/AppLogo';
import MenuIcon from '../assets/icons/MenuIcon'

const Navbar = () => {
  return (
    <Nav>
      <div className='wrapper'>
        <div>
          <div className='logo-container'>
            <a href='/'>
              <AppLogo className='logo'/>
            </a>
          </div>
        </div>
        <div className='nav-options'>
          <div className='pag-views'>
            <ul>
              <li><a className='view-title' href='/'>Menu</a></li>
              <li><a className='view-title' href='/'>Rewards</a></li>
              <li><a className='view-title' href='/'>Gift cards</a></li>
            </ul>
          </div>
          <div>

          </div>
        </div>
        <div className='menu-button'>
          <span>
            <button>
              <MenuIcon />
            </button>
          </span>
        </div>
      </div>
    </Nav>
  );
};

export default Navbar;