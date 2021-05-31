import { useState, useRef } from 'react';
import Header from '../styled-components/Header';
import Locate from '../assets/icons/Locate';
import AppLogo from '../assets/icons/AppLogo';
import MenuIcon from '../assets/icons/MenuIcon';
import DropDown from '../assets/icons/DropDown';

const Navbar = () => {
  const [view, setView] = useState(1);
  const [isOpen, setMenu] = useState(false);
  const mask = useRef(null);
  const menu1 = useRef(null);
  const menu2 = useRef(null);
  function selectView(number) {
    setView(number);
  }
  function openMenu() {
    if (!isOpen) {
      mask.current.classList.remove('hamburger-hidden');
      mask.current.classList.add('hamburger-mask--enter');
      menu1.current.classList.remove('hamburger-hidden');
      menu1.current.classList.add('hamburger-nav--opening');
      setTimeout(() => {
        menu1.current.classList.remove('hamburger-nav--opening');
        setMenu(!isOpen);
      }, 300);
    }else{
      mask.current.classList.remove('hamburger-mask--enter');
      menu1.current.classList.add('hamburger-nav--closing');
      setTimeout(() => {
        menu1.current.classList.remove('hamburger-nav--closing');
        mask.current.classList.add('hamburger-hidden');
        menu1.current.classList.add('hamburger-hidden');
        setMenu(!isOpen);
      }, 300);
    }
  }
  return (
    <Header>
      <nav>
        <div className='nav-wrapper'>
          <div className='nav-flex'>
            <div className='logo'>
              <div>
                <a href='/'>
                  <AppLogo />
                </a>
              </div>
            </div>
            <div className='options-big'>
              <div className='pages'>
                <ul>
                  <li><a className={`view-title ${view === 0 && 'view-title--active'}`} onClick={() => selectView(0)} href='/'>Menu</a></li>
                  <li><a className={`view-title ${view === 1 && 'view-title--active'}`} onClick={() => selectView(1)} href='/'>Rewards</a></li>
                  <li><a className={`view-title ${view === 2 && 'view-title--active'}`} onClick={() => selectView(2)} href='/'>Gift cards</a></li>
                </ul>
              </div>
              <div className='log-options'>
                <div>
                  <a href='/'><Locate className='icon'/> Find a store</a>
                  <button>Sign in</button>
                  <a href='/'>Join now</a>
                </div>
              </div>
            </div>
            <div className='menu-button'>
              <span>
                <button  onClick={() => openMenu()}>
                  <MenuIcon className='menu-icon'/>
                </button>
              </span>
            </div>
          </div>
        </div>
        <span>
          <div ref={mask} className='hamburger-mask hamburger-height'></div>
        </span>
        <div id='hamburger'>
          <div ref={menu1} className='hamburger-nav hamburger-height hamburger-hidden'>
            <div>
              <ul>
                <li>
                  <button>
                    Menu
                    <DropDown className='icon'/>
                  </button>
                </li>
                <li><a className='hamburger-option' href='/'>Rewards</a></li>
                <li><a className='hamburger-option' href='/'>Gift Cards</a></li>
              </ul>
              <hr />
              <div className='hamburger-log'>
                <button className='button button-white'>Sign in</button>
                <a className='join button' href='/'>Join now</a>
                <a className='find' href='/'><Locate className='icon'/>Find a store</a>
              </div>
            </div>
          </div>
          <div ref={menu2} className='hamburger-nav hamburger-height hamburger-hidden'>
            <ul>
              <li>
                <button onClick={() => openMenu()}>
                  <span>Menu</span>
                  <DropDown className='icon'/>
                </button>
              </li>
              <li><a className='hamburger-option' href='/'>All products</a></li>
              <li><a className='hamburger-option' href='/'>Featured</a></li>
              <li><a className='hamburger-option' href='/'>Previous</a></li>
              <li><a className='hamburger-option' href='/'>Favorites</a></li>
            </ul>
          </div>
        </div>
      </nav>
    </Header>
  );
};

export default Navbar;