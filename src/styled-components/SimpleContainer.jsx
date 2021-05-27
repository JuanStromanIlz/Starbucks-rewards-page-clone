import styled from 'styled-components';

const SimpleContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  margin-bottom: 72px;
  .wrapper {
    padding: 0 1.6rem;
  }
  .title {
    font-weight: 600;
  }
  .title, .sub {
    padding-bottom: 1.6rem;
  }
  .icon {
    vertical-align: middle;
    color: ${props => props.theme.colors.lightMain};
  }
  @media (min-width: 768px) {
    margin-bottom: 128px;
    .wrapper {
      width: 50%;
      margin-left: 16.66667%;
      padding: 0 2.4rem;
    }
    .title {
      font-size: 2.8rem;
    }
  }
  @media (min-width: 1024px) {
    .wrapper {
      padding: 0;
      margin: 0 auto;
    }
  }
`;

export default SimpleContainer;