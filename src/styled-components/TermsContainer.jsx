import styled from 'styled-components';

const TermsContainer = styled.div`
  background: ${props => props.theme.colors.grey};
  margin-bottom: 4.8rem;
  padding: 3.2rem 1.6rem;
  font-size: 1.3rem;
  > * {
    padding-bottom: 3.2rem;
  }
  .wrapper-text > * {
    padding-bottom: 1.6rem;
  }
  .wrapper-text > *:last-child {
    padding-bottom: 0;
  }
  .heading-text {
    letter-spacing: .1em;
    font-weight: 700;
  }
  .icon {
    vertical-align: middle;
    color: ${props => props.theme.colors.lightMain};
  }
`;

export default TermsContainer;