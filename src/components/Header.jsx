import Header from '../styled-components/Header';
import React from 'react';
import Locate from '../assets/icons/Locate';
import AppLogo from '../assets/icons/AppLogo';
import MenuIcon from '../assets/icons/MenuIcon'
import A from '../styled-components/A';

const Navbar = () => {
  return (
    <Header>
      <nav>
        <div className='nav-wrapper'>
          <div className='nav-flex'>
            <div className='logo'>
              <div>
                <a href='/'>
                  <AppLogo className='logo'/>
                </a>
              </div>
            </div>
            <div className='options-big'>
              <div className='pages'>
                <ul>
                  <li><a className='view-title' href='/'>Menu</a></li>
                  <li><a className='view-title' href='/'>Rewards</a></li>
                  <li><a className='view-title' href='/'>Gift cards</a></li>
                </ul>
              </div>
              <div className='log-options'>
                <div>
                  <a href='/'><Locate className='icon'/> Find a store</a>
                  <button>Sign in</button>
                  <a href='/' typeButton color='#fff' back={props => props.theme.colors.black}>Join now</a>
                </div>
              </div>
            </div>
            <div className='menu-button'>
              <span>
                <button>
                  <MenuIcon className='menu-icon'/>
                </button>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </Header>
  );
};

export default Navbar;