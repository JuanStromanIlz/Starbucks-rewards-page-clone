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
  }
  .text-block {
    margin: 0 auto;
    max-width: 400px;
    padding: 3.2rem 1.6rem;
    text-align: center;
  }
  .text-block h1 {
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
  }
  .join > div {
    font-size: 1.6rem;
    margin-top: 1.6rem;
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
    }
    .text-block {
      margin: unset;
      min-width: 48%;
      padding-left: 2.4rem;
      padding-right: 2.4rem;
      text-align: left;
    }
    .text-block h1 {
      font-size: 3.6rem;
    }
    .subtitle, .join > div {
      font-size: 1.9rem;
    }
  }
  @media (min-width: 1520px) {
    .text-block {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export default Hero;