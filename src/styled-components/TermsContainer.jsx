import styled from 'styled-components';

const TermsContainer = styled.div`
  background: ${props => props.theme.colors.grey};
  margin-bottom: 4.8rem;
  .wrapper {
    margin: 0 auto;
    max-width: 1440px;
    padding: 3.2rem 1.6rem;
    font-size: 1.3rem;
    p:first-child {
      padding-bottom: 3.2rem;
    }
    .text-container {
      display: inline-block;
      margin: 0;
      text-align: left;
      vertical-align: top;
      padding-bottom: 3.2rem;
      > * {
        padding-bottom: 1.6rem;
      }
      > *:last-child {
        padding-bottom: 0;
      }
      a {
        color: ${props => props.theme.colors.lightMain};
        :hover {
          text-decoration: none;
        }
      }
      .heading-text {
        letter-spacing: .1em;
        font-weight: 700;
        color: rgba(0,0,0,.56);
      }
      .icon {
        vertical-align: middle;
        color: ${props => props.theme.colors.lightMain};
      }
    }
  }
  
  @media (min-width: 768px) {
    .wrapper {
      font-size: 1.4rem;
      padding: 4.8rem 2.4rem;
      .text-container {
        width: 50%;
        .heading-text {
          font-size: 1.4rem;
        }
      }
      .text-container:nth-child(odd) {
        padding-left: 3.2rem;
      }
      .text-container:nth-last-of-type(-n+2) {
        padding-bottom: 0;
      }
    } 
  }
  @media (min-width: 1024px) {
    .wrapper {
      padding-left: 4rem;
      padding-right: 4rem;
    }
  }
  @media (min-width: 1520px) {
    .wrapper {
      padding-left: 0;
      padding-right: 0;
    }
  }
`;

export default TermsContainer;