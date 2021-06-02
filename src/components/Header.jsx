import { useState, useRef, useEffect } from 'react';
import Header from '../styled-components/Header';
import Locate from '../assets/icons/Locate';
import AppLogo from '../assets/icons/AppLogo';
import MenuIcon from '../assets/icons/MenuIcon';
import DropDown from '../assets/icons/DropDown';

const Navbar = () => {
  // Control of view selected for box-shadow animation
  const [view, setView] = useState(1);
  // Control of menu and subMenu open
  const [isOpen, setMenu] = useState(false);
  const [isOpenSub, setSubMenu] = useState(false);
  const mask = useRef(null);
  const menu1 = useRef(null);
  const menu2 = useRef(null);
  // Animation order for menu-icon
  const openAnima = ['hamburger-button-middleLine-OPENING', 'hamburger-button-topLine-OPENING', 'hamburger-button-bottomLine-OPENING'];
  const openFixed = ['hamburger-button-middleLine-OPEN', 'hamburger-button-topLine-OPEN', 'hamburger-button-bottomLine-OPEN'];
  const closeAnima = ['hamburger-button-middleLine-CLOSING', 'hamburger-button-topLine-CLOSING', 'hamburger-button-bottomLine-CLOSING'];
  const closeFixed = ['hamburger-button-middleLine-CLOSE', 'hamburger-button-topLine-CLOSE', 'hamburger-button-bottomLine-CLOSE'];
  const getWidth = () => window.innerWidth 
  || document.documentElement.clientWidth 
  || document.body.clientWidth;

  function selectView(number) {
    setView(number);
  }
  // Menu icon animation
  function iconChange() {
    const icon = document.getElementsByClassName('menu-icon')[0].getElementsByTagName("path");
    if (!isOpen) {
      for (let i = 0; i < icon.length; i++) {
        const element = icon[i];
        element.classList.add(openAnima[i]);
      }
      setTimeout(() => {
        icon[0].classList.remove(openAnima[0]);
        icon[1].classList.remove(openAnima[1]);
        icon[2].classList.remove(openAnima[2]);
        icon[0].classList.add(openFixed[0]);
        icon[1].classList.add(openFixed[1]);
        icon[2].classList.add(openFixed[2]);
      }, 400);
    }else{
      for (let i = 0; i < icon.length; i++) {
        const element = icon[i];
        element.classList.add(closeAnima[i]);
      }
      setTimeout(() => {
        icon[0].classList.remove(closeAnima[0]);
        icon[1].classList.remove(closeAnima[1]);
        icon[2].classList.remove(closeAnima[2]);
        icon[0].classList.remove(openFixed[0]);
        icon[1].classList.remove(openFixed[1]);
        icon[2].classList.remove(openFixed[2]);
        icon[0].classList.add(closeFixed[0]);
        icon[1].classList.add(closeFixed[1]);
        icon[2].classList.add(closeFixed[2]);
      }, 400);
    }
    
  }
  function openMenu() {
    const bodyPage = document.getElementsByTagName('body')[0];
    if (!isOpen) {
      // Add body fix
      bodyPage.style.cssText = 'overflow: hidden; touch-action: none; top: 0px; position: fixed; width: 100%';
      mask.current.classList.remove('hamburger-hidden');
      mask.current.classList.add('hamburger-mask--enter');
      menu1.current.classList.remove('hamburger-hidden');
      menu1.current.classList.add('hamburger-nav--opening');
      iconChange();
      setTimeout(() => {
        menu1.current.classList.remove('hamburger-nav--opening');
        setMenu(!isOpen);
      }, 300);
    }else{
      // Remove body fix and close for both menus
      bodyPage.style.removeProperty('overflow');
      bodyPage.style.removeProperty('touch-action');
      bodyPage.style.removeProperty('top');
      bodyPage.style.removeProperty('position');
      bodyPage.style.removeProperty('width');
      mask.current.classList.remove('hamburger-mask--enter');
      menu1.current.classList.add('hamburger-nav--closing');
      menu2.current.classList.add('hamburger-nav--closing');
      iconChange();
      setTimeout(() => {
        menu1.current.classList.remove('hamburger-nav--closing');
        menu2.current.classList.remove('hamburger-nav--closing');
        mask.current.classList.add('hamburger-hidden');
        menu1.current.classList.add('hamburger-hidden');
        menu2.current.classList.add('hamburger-hidden');
        setMenu(!isOpen);
        setSubMenu(false);
      }, 300);
    }
  }
  function openSubMenu() {
    if (!isOpenSub) {
      menu2.current.classList.remove('hamburger-hidden');
      menu2.current.classList.add('hamburger-nav--opening');
      setTimeout(() => {
        menu2.current.classList.remove('hamburger-nav--opening');
        setSubMenu(!isOpenSub);
      }, 300);
    }else{
      menu2.current.classList.add('hamburger-nav--closing');
      setTimeout(() => {
        menu2.current.classList.remove('hamburger-nav--closing');
        menu2.current.classList.add('hamburger-hidden');
        setSubMenu(!isOpenSub);
      }, 300);
    }
  }
  useEffect(() => {
    const resizeListener = () => {
      if (getWidth() > 768) {
        const bodyPage = document.getElementsByTagName('body')[0];
        // Reset icon style
        const icon = document.getElementsByClassName('menu-icon')[0].getElementsByTagName("path");
        for (let i = 0; i < icon.length; i++) {
          const element = icon[i];
          element.classList.remove(openFixed[i]);
        }
        // Remove body fix and hamburger nav in viewports up to 780px
        bodyPage.style.removeProperty('overflow');
        bodyPage.style.removeProperty('touch-action');
        bodyPage.style.removeProperty('top');
        bodyPage.style.removeProperty('position');
        bodyPage.style.removeProperty('width');
        mask.current.classList.remove('hamburger-mask--enter');
        menu1.current.classList.add('hamburger-nav--closing');
        menu2.current.classList.add('hamburger-nav--closing');
        setTimeout(() => {
          menu1.current.classList.remove('hamburger-nav--closing');
          menu2.current.classList.remove('hamburger-nav--closing');
          mask.current.classList.add('hamburger-hidden');
          menu1.current.classList.add('hamburger-hidden');
          menu2.current.classList.add('hamburger-hidden');
          setMenu(false);
          setSubMenu(false);
        }, 300);
      }
    };
    window.addEventListener('resize', resizeListener);
    return () => {
      window.removeEventListener('resize', resizeListener);
    }
  }, []);
  
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
                <button onClick={() => openMenu()}>
                  <MenuIcon className='menu-icon'/>
                </button>
              </span>
            </div>
          </div>
        </div>
        <span>
          <div ref={mask} className='hamburger-mask hamburger-height hamburger-hidden'></div>
        </span>
        <div id='hamburger'>
          <div ref={menu1} className='hamburger-nav hamburger-height hamburger-hidden'>
            <div>
              <ul>
                <li>
                  <button onClick={() => openSubMenu()}>
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
          <div ref={menu2} className='hamburger-nav hamburger-height hamburger-hidden sub-menu'>
            <ul>
              <li>
                <button onClick={() => openSubMenu()}>
                  Menu
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