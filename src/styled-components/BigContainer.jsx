import styled from 'styled-components';

const BigContainer = styled.div`
  background: ${props => props.theme.colors.grey};
  margin-bottom: 72px;
  .wrapper {
    margin: 0 auto;
    padding: 4.8rem 1.6rem;
    a {
      color: ${props => props.theme.colors.lightMain};
      :hover {
        text-decoration: none;
      }
    }
    .title {
      margin: 0 auto;
      text-align: center;
      padding-bottom: 4.8rem;
      margin-bottom: 1.6rem;
      h2 {
        font-weight: 600;
        font-size: 2.4rem;
        line-height: 1.385;
        padding-top: 2.4rem;
        padding-bottom: 1.6rem;
      }
    }
    .grid {
      > * {
        padding-bottom: 3.2rem;
      }
      .grid-title {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        p:first-child {
          font-weight: 600;
          font-size: 1.9rem;
        }
      }
      hr {
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
        .item-container {
          display: flex;
          .item-image {
            padding-right: 1.6rem;
          }
          .item-text {
            h3 {
              font-weight: 600;
              font-size: 1.6rem;
            }
            p {
              padding-top: 1.6rem;
              .icon {
                vertical-align: middle;
                color: ${props => props.theme.colors.lightMain};
              }
            }
          }
        }
      }
    }
  } 
   
  @media (min-width: 768px) {
    margin-bottom: 127px;
    .wrapper {
      padding-left: 2.4rem;
      padding-right: 2.4rem;
      .title {
        width: 66.66667%;
        padding-bottom: 6.4rem;
        h2 {
          font-size: 2.8rem;
          padding-top: 0;
        }
      }
      .grid-title p:first-child {
        font-size: 2.4rem!important;
      }
      .grid-item {
        margin: 0;
        width: 50%;
        padding: 0;
        .item-container {
          padding-right: .8rem;
          .item-text h3 {
            font-size: 1.9rem!important;
          }
        }
      }
    }
  }
  @media (min-width: 1024px) {
    .wrapper {
      padding-left: 4rem;
      padding-right: 4rem;
      .title {
        width: 50%!important;
      }
      .grid-title {
        width: 16.66667%!important;
        padding-bottom: 0!important;
      }
      .grid-item {
        width: 41.66667%;
        .item-container {
          padding: 0 2.4rem;
        }
      }
    }
  }
  @media (min-width: 1520px) {
    .wrapper {
      max-width: 1440px;
      margin-left: auto;
      margin-right: auto;
      padding-left: 0;
      padding-right: 0;
      .grid-item {
        width: 33.33333%;
      }
    }
  }
`;

export default BigContainer;