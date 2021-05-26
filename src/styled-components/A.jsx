import styled from 'styled-components';

const A = styled.a`
  color: ${props => props.color ? props.color : props.theme.colors.lightMain};
  text-decoration: ${props => props.typeButton && 'none'};
  display: inline-block;
  background: ${props => props.typeButton ? props.back : 'none'};
  border-color: ${props => props.typeButton ? props.theme.colors.lightMain : ''};
  border-style: ${props => props.typeButton && 'solid'};
  border-width: ${props => props.typeButton && '1px'};
  border-radius: ${props => props.typeButton && '50px'};
  padding: ${props => props.typeButton && '7px 16px'};
  font-weight: ${props => props.typeButton && '600'};
  line-height: ${props => props.typeButton && '1.2'};
  text-align: ${props => props.typeButton && 'center'};
`;

export default A;