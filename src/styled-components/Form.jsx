import styled from 'styled-components';

const Form = styled.form`
  padding-bottom: 3.2rem;
  .wrapper {
    display: flex;
    flex-direction: column;
  }
  .input-wrapper {
    display: flex;
    position: relative;
    border-bottom: 1px solid ${props => props.touchedField ? props.theme.colors.lightMain : 'rgba(0,0,0,.2)'};
  }
  .error-wrapper {

  }
  .warning-icon {
    margin-bottom: .4rem;
    align-self: flex-end;
    color: ${props => props.theme.colors.error};
  }
  ${'' /* .error-field {
    padding-top: .8rem;
    display: flex;
  }
  .is-error {
    height: 28px;
  }
  #error-field div:first-child {
    position: relative;
    height: 0px;
    overflow: hidden;
    transition: height .3s cubic-bezier(.25,.46,.45,.94);
  } */}
  ${'' /* .error-icon {
    position: absolute;
    top: 0;
    left: -4px;
    animation: field-status-icon-fade-in .2s ease-out forwards;
    color: ${props => props.theme.colors.error};
  }
  #error-message {
    display: inline-block;
    padding-left: 20px;
    vertical-align: middle;
  } */}
  label {
    position: absolute;
    cursor: text;
    font-size: 1.4rem;
    top: 30px;
    left: 0;
    user-select: none;
    z-index: 2;
    :focus {
      top: 0;
    }
  }
  input {
    appearance: none;
    background-color: transparent;
    border: 0;
    border-radius: 0;
    color: rgba(0,0,0,.9);
    display: block;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 10px;
    line-height: 1rem;
    padding: 32px 0 6px;
    width: 100%;
    :focus {
      outline: none;
    }
  }
  button {
    display: inline-block;
    background: none;
    color: rgba(0,0,0,.9);
    border-style: solid;
    border-width: 1px;
    border-radius: 50px;
    padding: 7px 16px;
    font-weight: 600;
    line-height: 1.2;
    text-align: center;
    text-decoration: none;
    transition: all .2s ease;
    align-self: flex-end;
    margin-bottom: .8rem;
  }
`;

export default Form;