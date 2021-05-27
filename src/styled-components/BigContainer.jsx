import styled from 'styled-components';

const BigContainer = styled.div`
  background: ${props => props.theme.colors.grey};
  margin-bottom: 72px;
  .wrapper {
    margin: 0 auto;
    max-width: 1440px;
    padding: 4.8rem 1.6rem;
  }
  .title {
    margin: 0 auto;
    text-align: center;
    padding-bottom: 4.8rem;
    margin-bottom: 1.6rem;
  }
  .title h2 {
    font-weight: 600;
    font-size: 2.4rem;
    line-height: 1.385;
    padding-top: 2.4rem;
    padding-bottom: 1.6rem;
  }
  .grid-title {
    display: inline-block;
    vertical-align: top;
    width: 100%;
  }
  .grid-title p:first-child {
    font-weight: 600;
    font-size: 1.9rem;
  }
  .grid > * {
    padding-bottom: 3.2rem;
  }
  .grid hr {
    border: 0;
    margin: 0;
    padding-top: 1.6rem;
    padding-bottom: 4rem;
    :before {
    content: "";
    display: block;
    border-top: 1px solid rgba(0,0,0,.1);
    }
  }
  .grid-item {
    display: inline-block;
  }
  .item-container {
    display: flex;
  }
  .item-container .item-image {
    padding-right: 1.6rem;
  }
  .item-text h3 {
    font-weight: 600;
    font-size: 1.6rem;
  }
  .item-text p {
    padding-top: 1.6rem;
  }
  .icon {
    vertical-align: middle;
    color: ${props => props.theme.colors.lightMain};
  }
  @media (min-width: 768px) {
    margin-bottom: 127px;
    .wrapper {
      padding-left: 2.4rem;
      padding-right: 2.4rem;
    }
    .title {
      width: 66.66667%;
      padding-bottom: 6.4rem;
    }
    .title h2 {
      font-size: 2.8rem;
      padding-top: 0;
    }
    .grid-title p:first-child {
      font-size: 2.4rem;
    }
    .grid-item {
      margin: 0;
      width: 50%;
      padding: 0;
    }
    .item-container {
      padding-right: .8rem;
    }
    .item-text h3 {
      font-size: 1.9rem;
    }
  }
  @media (min-width: 1024px) {
    .grid-title {
      width: 16.66667%;
      padding-bottom: 0;
    }
    .grid-item {
      width: 41.66667%;;
    }
    .item-container {
      padding: 0 2.4rem;
    }
  }
  @media (min-width: 1280px) {
    .grid-item {
      width: 33.33333%;
    }
  }
`;

export default BigContainer;