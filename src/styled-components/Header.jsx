import styled from 'styled-components';

const Header = styled.header`
  position: relative;
  z-index: 2;
  nav {
    display: block;
    background-color: #fff;
    box-shadow: 0 1px 3px rgb(0 0 0 / 10%), 0 2px 2px rgb(0 0 0 / 6%), 0 0 2px rgb(0 0 0 / 7%);
    .nav-wrapper {
      padding-left: 1.6rem;
      padding-right: 1.6rem;
      .nav-flex {
        display: flex;
        align-items: center;
        .logo > div {
          width: 40px;
          height: 40px;
          margin-right: 1.6rem;
          margin-top: 1.6rem;
          margin-bottom: 1.6rem;
        }
        .options-big {
          display: none;
          align-items: center;
          flex-grow: 1;
          li:first-of-type {
            padding-left: 0;
          }
          li {
            display: inline-block;
            padding-left: 2.4rem;
            .view-title {
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
            .view-title--active {
              box-shadow: inset 0 -6px #008248;
            }
          }
          .log-options {
            margin-left: auto;
            > div {
              display: flex;
              align-items: center;
              font-size: 1.4rem;
              margin-left: 4rem;
              button {
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
              a:first-of-type {
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
                .icon {
                  vertical-align: middle;
                  padding-right: .8rem;
                }
              }
              a:last-of-type {
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
            }
          }
        }
        .menu-button {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 44px;
          margin-left: 1.6rem;
          margin-right: 1.6rem;
          > span {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            > button {
              position: relative;
              color: rgba(0,0,0,.56);
              background: transparent;
              border: 0;
              padding: 0;
              border-radius: 0;
              min-width: 44px;
              min-height: 44px;
              .menu-icon {
                background: transparent;
                border: 0;
                padding: 0;
                border-radius: 0;
                vertical-align: middle;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
    /* HAMBURGER START */
    .hamburger-mask {
      position: fixed;
      left: 0;
      top: 0;
      right: 0;
      background: #000;
      opacity: 0;
      transition-duration: .3s;
      transition-property: opacity;
      transition-timing-function: ease;
    }
    .hamburger-height {
      top: 72px;
      height: calc(100% - 72px);
    }
    .hamburger-hidden {
      display: none!important;
    }
    .sub-menu {
      padding-top: 0!important;
      button {
        box-shadow: inset 0 4px 5px -3px rgb(0 0 0 / 20%);
        background: #f7f7f7!important;
        justify-content: center!important;
        padding: 1.6rem 3.2rem;
        .icon {
          position: absolute;
          left: 24px;
          top: 16px;
          vertical-align: middle!important;
          transform: rotate(90deg)!important;
        }
      }
    }
    .hamburger-nav {
      position: fixed;
      left: 20vw;
      right: 0;
      width: 80vw;
      box-shadow: inset 0 4px 3px -3px rgba(0, 0, 0, 0.1),
        inset 0 4px 2px -2px rgba(0, 0, 0, 0.07);
      overflow: auto;
      padding-top: 3.2rem;
      background: #fff;
      display: block;
      .hamburger-option {
        padding: 1.6rem 3.2rem;
        font-size: 1.9rem;
        text-decoration: none;
        display: block;
        text-align: left;
        color: inherit;
      }
      button {
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        width: 100%;
        padding: 1.6rem 3.2rem;
        background: transparent;
        border: 0;
        border-radius: 0;
        font-size: 1.9rem;
        font-style: inherit;
        .icon {
          width: 24px;
          height: 24px;
          overflow: visible;
          vertical-align: middle;
          transform: rotate(-90deg);
        }
      }
      > div hr {
        border: 0;
        margin: 0;
        padding-right: 3.2rem!important;
        padding-left: 3.2rem!important;
        padding-top: 1.6rem!important;
        padding-bottom: 3.2rem!important;
        :before {
          content: "";
          display: block;
          border-top: 2px solid rgba(0,0,0,.1);
        }
      }
      .hamburger-log {
        display: inline-block;
        padding-left: 2.4rem;
        padding-right: 2.4rem;
        .button {
          width: auto;
          font-size: 1.4rem;
          display: inline-block;
          background: none;
          border-style: solid;
          border-width: 1px;
          border-radius: 50px;
          padding: 7px 16px;
          font-weight: 600;
          line-height: 1.2;
          text-align: center;
          text-decoration: none;
          transition: all .2s ease;
        }
        .button-white {
          color: rgba(0,0,0,.87);
          margin-right: 1.6rem!important;
        }
        .join {
          background-color: #000!important;
          border-color: #000!important;
          color: #fff!important;
        }
        .find {
          display: block;
          text-decoration: none;
          font-weight: 600;
          padding-right: .8rem;
          margin-top: 1.6rem;
          color: rgba(0,0,0,.87);
          svg {
            width: 32px;
            height: 32px;
            padding-right: .8rem;
            vertical-align: middle;
            color: rgba(0,0,0,.87);
          }
        }
      }
    }
    .hamburger-nav--opening {
      animation: slideOpen .4s cubic-bezier(.75, 0, .5, 1) forwards;
    }
    .hamburger-nav--closing {
      animation: slideClosed .3s cubic-bezier(.75, 0, .5, 1) forwards;
    }
    .hamburger-mask--enter {
      opacity: .38;
    }
    @keyframes slideOpen {
      0% {
        transform: translateX(100%);
      }
      to {
        transform: translateX(0);
      }
    }
    @keyframes slideClosed {
      0% {
        transform: translateX(0)
      }
      to {
        transform: translateX(100%)
      }
    }
    /* BUTTON NAV ANIMATION START */
    .hamburger-button-animation {
      animation-duration: .4s;
      animation-fill-mode: forwards;
      animation-timing-function: ease
    }
    .hamburger-button-animation-outer-lines {
      transform-box: fill-box;
      transform-origin: center
    }
    .hamburger-button-topLine-OPEN {
      transform: translateY(330%) rotate(-45deg)
    }
    .hamburger-button-middleLine-OPEN {
      opacity: 0
    }
    .hamburger-button-bottomLine-OPEN {
      transform: translateY(-330%) rotate(-135deg)
    }
    .hamburger-button-topLine-OPENING {
      animation-name: topLineAnimation;
      animation-direction: normal
    }
    .hamburger-button-middleLine-OPENING {
      animation-name: middleLineAnimation;
      animation-direction: normal
    }
    .hamburger-button-bottomLine-OPENING {
      animation-name: bottomLineAnimation;
      animation-direction: normal
    }
    .hamburger-button-topLine-CLOSED {
      transform: translateY(0) rotate(0)
    }
    .hamburger-button-middleLine-CLOSED {
      opacity: 1
    }
    .hamburger-button-bottomLine-CLOSED {
      transform: translateY(0) rotate(0)
    }
    .hamburger-button-topLine-CLOSING {
      animation-name: topLineAnimation;
      animation-direction: reverse
    }
    .hamburger-button-middleLine-CLOSING {
      animation-name: middleLineAnimation;
      animation-direction: reverse
    }
    .hamburger-button-bottomLine-CLOSING {
      animation-name: bottomLineAnimation;
      animation-direction: reverse
    }
    @keyframes topLineAnimation {
      0% {
        transform: translateY(0) rotate(0);
      }
      33% {
        transform: translateY(330%) rotate(0);
      }
      66% {
        transform: translateY(330%) rotate(90deg);
      }
      to {
        transform: translateY(330%) rotate(135deg);
      }
    }

    @keyframes middleLineAnimation {
      0% {
          opacity: 1
      }
      33% {
          opacity: 1
      }
      34% {
          opacity: 0
      }
      to {
          opacity: 0
      }
    }

    @keyframes bottomLineAnimation {
      0% {
          transform: translateY(0) rotate(0)
      }
      33% {
          transform: translateY(-330%) rotate(0)
      }
      66% {
          transform: translateY(-330%) rotate(0)
      }
      to {
          transform: translateY(-330%) rotate(45deg)
      }
    }
  }
  /* BUTTON NAV ANIMATION END */
  @media (min-width: 375px) {
    nav .hamburger-height {
      top: 72px;
      height: calc(100% - 72px);
    }
  }
  @media (min-width: 768px) {
    nav {
      .nav-wrapper {
        padding-left: 2.4rem;
        padding-right: 2.4rem;
        .nav-flex {
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
            margin-bottom: 0;
            margin-right: 2.4rem;
          }
        }
      }
      .hamburger-height {
        top: 83px;
        height: calc(100% - 83px);
      }
    }
  }
  @media (min-width: 1024px) {
    position: fixed;
    top: 0;
    width: 100%;
    nav {
      .nav-wrapper {
        padding-left: 4rem;
        padding-right: 4rem;
        .nav-flex {
          .options-big .view-title {
            padding-top: 4rem!important;
            padding-bottom: 4rem!important;
          }
          .logo > div {
            margin-right: 4rem;
          }
        }
      }
      .hamburger-height {
        top: 99px;
        height: calc(100% - 99px);
      }
    }
  }
  @media (min-width: 1520px) {
    nav .nav-wrapper {
      padding-left: 0;
      padding-right: 0;
      max-width: 1440px;
      margin-left: auto;
      margin-right: auto;
    }
  }
`;

export default Header;