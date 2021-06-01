import styled from 'styled-components';

const Hero = styled.div`
  margin-bottom: 72px;
  .small-view {
    background: url(https://www.starbucks.com/weblx/images/rewards/hero/hero-mobile_2021.jpg) rgb(212, 233, 226);
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    :after {
      content: '';
      width: 0;
      float: left;
      padding-bottom: 133.333%;
    }
  }
  .big-view {
    background: url(https://www.starbucks.com/weblx/images/rewards/hero/xl-hero-desktop_2021.png) rgb(212, 233, 226);
    background-position: 50%;
    background-size: auto 100%;
    display: none;
    :after {
      content: '';
      width: 0;
      float: left;
      padding-bottom: 56.25%;
    }
  }
  .max-width {
    width: 100%;
    display: flex;
    margin: 0 auto;
    max-width: 1440px;
  }
  .text-wrapper {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .text-block {
      margin: 0 auto;
      max-width: 400px;
      padding-top: 3.2rem;
      padding-bottom: 3.2rem;
      padding-left: 1.6rem;
      padding-right: 1.6rem;
      text-align: center;
      h1 {
        font-weight: 600;
        font-size: 2.8rem;
        line-height: 1.29;
      }
      .subtitle {
        font-size: 1.6rem;
        padding-top: 1.6rem;
      }
      .join {
        padding-top: 3.2rem;
        .type-button {
          background-color: #008248;
          color: #fff;
          display: inline-block;
          border: 1px solid #008248;
          border-radius: 50px;
          padding: 7px 16px;
          font-weight: 600;
          line-height: 1.2;
          text-align: center;
          text-decoration: none;
          transition: all .2s ease;
          :hover{
            background-color: rgba(0, 130, 72, .9);
            border-color: rgba(0, 130, 72, .9);
          }
        }
        .hero-link {
          color: rgba(0,0,0,.87);
          :hover {
            text-decoration: none;
          }
        }
        > div {
          font-size: 1.6rem;
          margin-top: 1.6rem;
        }
      }
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 128px;
    .small-view {
      display: none;
    }
    .big-view {
      display: flex;
    }
    .text-wrapper {
      width: 100%;
      justify-content: flex-start;
      align-items: center;
      .text-block {
        margin: unset;
        min-width: 48%;
        padding-left: 2.4rem;
        padding-right: 2.4rem;
        text-align: left;
        h1 {
          font-size: 3.6rem;
        }
        .subtitle, .join > div {
          font-size: 1.9rem;
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .text-block {
      padding-left: 4rem!important;
      padding-right: 4rem!important;
    }
  }
  @media (min-width: 1520px) {
    .text-block {
      padding-left: 0!important;
      padding-right: 0!important;
    }
  }
`;

export default Hero;