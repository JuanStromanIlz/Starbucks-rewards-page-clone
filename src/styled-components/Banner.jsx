import styled from 'styled-components';

const Banner = styled.div`
  height: 50px;
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 3;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 12%), 0 0 2px 0 rgb(0 0 0 / 24%);
  background-color: ${props => props.theme.colors.main};
  .banner-wrapper {
    height: 100%;
    margin: 0 auto;
    max-width: 1440px;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    p {
      color: #fff;
      font-weight: 700;
      font-size: 1.3rem;
      text-transform: uppercase;
      letter-spacing: .1em;
    }
    a {
      display: inline-block;
      color: #fff;
      background: none;
      border: 1px solid #fff;
      border-radius: 50px;
      padding: 7px 16px;
      font-weight: 600;
      line-height: 1.2;
      text-align: center;
      text-decoration: none;
      flex-shrink: 0;
    }
  }
  @media (min-width: 768px) {
    .banner-wrapper {
      padding-left: 99px;
      padding-right: 2.4rem;
      p {
        font-size: 1.4rem;
      }
      a {
        display: none;
      }
    }
  }
  @media (min-width: 1024px) {
    top: 99px;
    .banner-wrapper {
      padding-left: 131px;
      padding-right: 4rem;
    }
  }
  @media (min-width: 1520px) {
    .banner-wrapper {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export default Banner;