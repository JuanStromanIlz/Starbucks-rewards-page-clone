import styled from 'styled-components';

const Hero = styled.div`
  display: flex;
  width: 100%;
  margin-bottom: 72px;
  background: url(https://www.starbucks.com/weblx/images/rewards/hero/hero-mobile_2021.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 50%;
  :after {
    content: '';
    width: 0;
    float: left;
    padding-bottom: 133.333%;
    ${'' /* padding-bottom: 56.25%; */}
  }
  .text-wrapper {
    display: flex;
    width: 100%;
  }
  .text-block {
    text-align: center;
    margin: 0 auto;
    padding-top: 3.2rem;
    padding-bottom: 3.2rem;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    min-width: 48%;
  }
  h1 {
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
  .type-button {
    display: inline-block;
    color: #fff;
    background: ${props => props.theme.colors.lightMain};
    border: 1px solid #fff;
    border-radius: 50px;
    padding: 7px 16px;
    font-weight: 600;
    text-decoration: none;
  }
`;

export default Hero;