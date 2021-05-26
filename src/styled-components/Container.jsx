import styled from 'styled-components';

const Container = styled.div`
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  margin-bottom: 72px;
  .title {
    margin: 0 auto;
    text-align: center;
  }
  .title h2 {
    font-size: 2.4rem;
    line-height: 1.385;
    font-weight: 600;
  }
  .title p {
    padding-top: 1.6rem;
  }
  .list {
    display: flex;
    flex-direction: column;
    padding-top: 48px;
    margin: 0;
  }
  .list-item {
    display: flex;
    padding-bottom: 3.2rem;
  }
  .list-item .image {
    max-width: 128px;
    margin: 0 auto;
    padding-right: 1.6rem;
    flex-shrink: 0;
  }
  .list-item .image img {
    max-width: 100%;
    height: auto;
    border: 0;
  }
  .list-item .text-container {
    min-width: calc(100% - 128px);
    text-align: left;
  }
  .list-item:last-child {
    padding-bottom: 0;
  }
  .text-container h2 {
    font-size: 1.6rem;
    font-weight: 600;
  }
  .text-container p {
    padding-top: 1.6rem;
  }
  .text-container button {
    background: transparent;
    margin: 1.6rem 0;
    border: 0;
    padding: 0;
    border-radius: 0;
    color: ${props => props.theme.colors.lightMain};
    text-decoration: underline;
    :hover {
      text-decoration: none;
    }
  }
  @media (min-width: 768px) {
    padding-left: 4rem;
    padding-right: 4rem;
    margin-bottom: 128px;
    margin-left: 5vw;
    margin-right: 5vw;
    .title {
      width: 50%;
    }
    .title h2 {
      font-size: 2.8rem;
    }
    .list {
      flex-direction: row;
    }
    .list-item {
      flex-direction: column;
      width: calc(100% / 3);
    }
    .list-item:nth-child(1) {
      margin-right: 2.4rem;
    }
    .list-item:nth-child(2) {
      margin-right: 2.4rem;
      margin-left: 2.4rem;
    }
    .list-item:nth-child(3) {
      margin-left: 2.4rem;
    }
    .list-item .image {
      padding-right: 0;
      padding-bottom: 2.4rem;
    }
    .list-item .text-container {
    text-align: center;
  }
  }
`;

export default Container;