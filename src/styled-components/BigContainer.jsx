import styled from 'styled-components';

const BigContainer = styled.div`
  padding: 4.8rem 1.6rem;
  background: ${props => props.theme.colors.grey};
  margin-bottom: 72px;
  .title {
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
    display: flex;
  }
  .grid-item div:first-child {
    padding-right: 1.6rem;
  }
  .item-text p {
    padding-top: 1.6rem;
  }
  .icon {
    vertical-align: middle;
    color: ${props => props.theme.colors.lightMain};
  }
  @media (min-width: 768px) {
    
  }
`;

export default BigContainer;