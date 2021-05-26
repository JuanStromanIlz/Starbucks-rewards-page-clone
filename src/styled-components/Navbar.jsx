import styled from 'styled-components';

const Nav = styled.nav`
  position: relative;
  background-color: #fff;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
  .view-title {
    text-transform: uppercase;
    letter-spacing: .1em;
    font-weight: 700;
    text-decoration: none;
    color: ${props => props.theme.colors.black};
    :hover {
      color: ${props => props.theme.colors.lightMain};
    }
  }
  .wrapper {
    display: flex;
    aling-items: center;
  }
  .logo-container {
    margin-right: 1.6rem;
    margin-top: 1.6rem;
    margin-bottom: 1.6rem;
    width: 40px;
    height: 40px
  }
  .logo-container :is(a, svg) {
    display: block;
  }
  .nav-options {
    display: flex;
    align-items: center;
    flex-grow: 1;
    display: none;
  }
  .pag-views ul {
    list-style: none;
    margin: 0;
    padding: 0;
    float: right;
  }
  li:first-of-type {
    display: inline-block;
    padding-left: 0;
  }
  li {
    display: inline-block;
    padding-left: 1.6rem;
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
    display: block;
  }
  .menu-button > span > button {
    min-width: 44px;
    min-height: 44px;
    background: transparent;
    border: 0;
    padding: 0;
    border-radius: 0;
  }
`;

export default Nav;