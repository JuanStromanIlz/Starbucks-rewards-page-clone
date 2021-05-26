import styled from 'styled-components';

const FooterContainer = styled.footer`
  box-shadow: 0 -1px 3px rgb(0 0 0 / 10%), 0 -2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
  margin-top: 4.8rem;
  padding-top: 3.2rem;
  padding-bottom: 3.2rem;
  .wrapper-padding {
    padding: 0 1.6rem;
  }
  .acordion {

  }
  hr {
    border: 0;
    margin: 0;
    padding-top: 3.2rem;
    padding-bottom: 3.2rem;
    :before {
    content: "";
    display: block;
    border-top: 1px solid rgba(0,0,0,.1);
    }
  }
  .social-media {
    display: flex;
    list-style: none;
    margin-left: -5px;
    margin: 0;
    padding: 0;
  }
  .social-media a {
    position: relative;
    display: inline-block;
    min-width: 44px;
    min-height: 44px;
  }
  .social-media .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    vertical-align: middle;
  }
  .footer-list {
    margin-top: 1.6rem;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  .footer-list a {
    padding: .8rem 0;
    margin-bottom: .4rem;
    text-decoration: none;
    display: block;
    color: rgb(0,0,0);
  }
  .rights {
    font-size: 1.3rem;
    padding: 1.6rem 0;
    margin: 0;
    color: rgba(0,0,0,.56);
  }
`;

export default FooterContainer;