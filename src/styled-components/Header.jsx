import styled from 'styled-components';

const Header = styled.header`
  position: relative;
  z-index: 2;
  nav {
    display: block;
    background-color: #fff;
    box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
  }
  .nav-wrapper {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
  .nav-flex {
    display: flex;
    align-items: center;
  }
  .menu-button {
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    width: 44px;
    margin-left: 1.6rem;
    margin-right: 1.6rem;
  }
  .menu-button > span {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  .menu-button > span > button {
    position: relative;
    color: rgba(0,0,0,.56);
    background: transparent;
    border: 0;
    padding: 0;
    border-radius: 0;
  }
  .menu-icon {
    background: transparent;
    border: 0;
    padding: 0;
    border-radius: 0;
    vertical-align: middle;
    cursor: pointer;
  }
  .logo > div {
    width: 40px;
    height: 40px;
    margin-right: 1.6rem;
    margin-top: 1.6rem;
    margin-right: 1.6rem;
  }
  .options-big {
    display: none;
    align-items: center;
    flex-grow: 1;
  }
  .options-big ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .options-big li {
    display: inline-block;
    padding-left: 2.4rem;
  }
  .options-big li:first-of-type {
    padding-left: 0;
  }
  .options-big li a {
    color: rgba(0, 0, 0, .87);
    display: inline-block;
    text-decoration: none;
    text-transform: uppercase;
    letter-spacing: .1em;
    font-weight: 700;
    font-size: 1.4rem;
    padding-top: 3.2rem;
    padding-bottom: 3.2rem;
    :hover {
      color: ${props => props.theme.colors.lightMain};
    }
  }
  .a--active {
    box-shadow: inset 0 -6px #008248;
  }
  .log-options {
    margin-left: auto;
  }
  .log-options > div {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
    margin-left: 4rem;
  }
  .log-options > div a:first-of-type {
    color: rgba(0,0,0,.87);
    cursor: pointer;
    text-decoration: none;
    text-align: inherit;
    font-weight: 600;
    margin-right: 4rem;
    padding-right: .8rem;
    :hover {
      color: ${props => props.theme.colors.lightMain};
      > * {
        color: ${props => props.theme.colors.lightMain};
      }
    }
  }
  .log-options > div a:first-of-type .icon {
    vertical-align: middle;
    padding-right: .8rem;
  }
  .log-options > div a:last-of-type {
    display: inline-block;
    background: rgba(0,0,0,.87);
    border: 1px solid rgba(0,0,0,.87);
    color: #fff;
    border-radius: 50px;
    padding: 7px 16px;
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
    text-decoration: none;
    transition: all .2s ease;
    :hover {
      background: rgba(0,0,0,.1);
    }
  }
  .log-options > div button {
    display: inline-block;
    background: none;
    border: 1px solid rgba(0,0,0,.87);
    border-radius: 50px;
    padding: 7px 16px;
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
    text-decoration: none;
    margin-right: 1.6rem;
    transition: all .2s ease;
    :hover {
      background: rgba(127,127,127, .1);
    }
  }
  @media (min-width: 768px) {
    .nav-wrapper {
      padding-left: 2.4rem;
      padding-right: 2.4rem;
    }
    .options-big {
      display: flex;
    }
    .menu-button {
      display: none;
    }
    .logo > div {
      width: 51px;
      height: 51px;
      margin-top: 0;
      margin-right: 0;
      margin-right: 2.4rem;
    }
  }
  @media (min-width: 1024px) {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    .nav-wrapper {
      padding-left: 4rem;
      padding-right: 4rem;
    }
    .logo > div {
      margin-right: 4rem;
    }
    .options-big li a {
      padding-top: 4rem;
      padding-bottom: 4rem;
    }
  }
  @media (min-width: 1520px) {
    position: relative;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    .nav-wrapper {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export default Header;