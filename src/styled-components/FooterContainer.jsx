import styled from 'styled-components';

const FooterContainer = styled.footer`
  box-shadow: 0 -1px 3px rgb(0 0 0 / 10%), 0 -2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
  margin-top: 4.8rem;
  padding-top: 3.2rem;
  padding-bottom: 3.2rem;
  .wrapper-padding {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 1.6rem;
    hr {
      border: 0;
      margin: 0;
      padding-top: 3.2rem;
      padding-bottom: 3.2rem;
      :before {
        content: "";
        display: block;
        border-top: 2px solid rgba(0,0,0,.1);
      }
    }
    .social-media {
      display: flex;
      list-style: none;
      margin: 0;
      margin-left: -5px;
      padding: 0;
      a {
        position: relative;
        display: inline-block;
        min-width: 44px;
        min-height: 44px;
        .icon {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%);
          vertical-align: middle;
        }
      }
    }
    .footer-list {
      margin-top: 1.6rem;
      margin: 0;
      padding: 0;
      list-style: none;
      span {
        display: none;
      }
      a {
        padding: .8rem 0;
        margin-bottom: .4rem;
        text-decoration: none;
        display: block;
        color: rgb(0,0,0);
        :hover {
          text-decoration: underline;
        }
      }
    }
    .rights {
      font-size: 1.3rem;
      padding: 1.6rem 0;
      margin: 0;
      color: rgba(0,0,0,.56);
    }
  }
  
  @media (min-width: 480px) {
    .social-media li {
      margin-right: .4rem;
    }
  }
  @media (min-width: 768px) {
    .wrapper-padding {
      padding-left: 2.4rem;
      padding-right: 2.4rem;
      .rights {
        font-size: 1.4rem;
      }
    }
  }
  @media (min-width: 1024px) {
    padding-top: 4.8rem;
    .wrapper-padding {
      padding-left: 4rem;
      padding-right: 4rem;
      .acordion {
        display: flex;
        > * + * {
          margin-left: 3.2rem;
        }
      }
      .footer-list {
        display: flex;
        margin-top: 1.6rem;
        margin-bottom: .4rem;
        li {
          display: flex;
          text-align: center;
          align-items: center;
          span {
            display: inline;
            color: rgba(0,0,0,.56);
            padding-left: .8rem;
            padding-right: .8rem;
          }
          a {
            display: block;
            margin: 0;
            padding: 0 1.6rem;
          }
          a:first-child {
            padding-right: 1.6rem;
            padding-left: 0;
          }
        }
      }
    }
  }
  @media (min-width: 1520px) {
    .wrapper-padding {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export default FooterContainer;