import styled from 'styled-components';

const SimpleContainer = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  padding: 0 1.6rem;
  margin-bottom: 72px;
  .title, .sub {
    padding-bottom: 1.6rem;
  }
  .icon {
    vertical-align: middle;
    color: ${props => props.theme.colors.lightMain};
  }
`;

export default SimpleContainer;