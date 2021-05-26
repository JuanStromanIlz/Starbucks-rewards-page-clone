import styled from 'styled-components';

const Banner = styled.div`
  height: 50px;
  z-index: 3;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  box-shadow: 0 4px 4px 0 rgb(0 0 0 / 12%), 0 0 2px 0 rgb(0 0 0 / 24%);
  background-color: ${props => props.theme.colors.main};
  color: #fff;
  p {
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
  }
`;

export default Banner;