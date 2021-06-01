import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
  padding-bottom: 3.2rem;
  .footer-wrapper {
    display: flex;
    flex-direction: column;
    .input-wrapper {
      display: flex;
      position: relative;
      border-bottom: 1px solid rgba(0,0,0,.2);
      label {
        cursor: text;
        font-size: 1.4rem;
        position: absolute;
        top: 30px;
        left: 0;
        -webkit-user-select: none;
        user-select: none;
        color: rgba(0,0,0,.56);
        z-index: 2;
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
      .warning-icon {
        display: inline-block;
        margin-bottom: .4rem;
        align-self: flex-end;
        color: ${props => props.theme.colors.error};
      }
    }
    .error-wrapper {
      height: 0;
      overflow: hidden;
      transition: height .3s cubic-bezier(.25,.46,.45,.94);
      > div {
        > span {
          display: block;
          padding-top: .8rem;
          #error-message {
            display: block;
            font-size: 1.3rem;
            position: relative;
            transition: color .2s ease-out;
            .error-icon {
              position: absolute;
              top: 0;
              left: -4px;
              animation: field-status-icon-fade-in .2s ease-out forwards;
              color: ${props => props.theme.colors.error};
            }
            span {
              display: inline-block;
              padding-left: 20px;
              vertical-align: middle;
            }
          }
        }
      }
    }
    .label--isActive {
      animation: 0.3s float-label-appear ease-in-out forwards;
    }
    .input-wrapper--active {
      border-color: ${props => props.theme.colors.lightMain};
    }
    .input-wrapper--error {
      border-color: ${props => props.theme.colors.error};
    }
    .error-wrapper--active {
      height: 28px;
    }
    @keyframes float-label-appear {
      0% {
        font-size: 1.4rem;
        opacity: 1;
        top: 30px;
      }
      50% {
        font-size: 1.3rem;
        opacity: 0;
        top: 30px;
      }
      51% {
        font-size: 1.3rem;
        opacity: 0;
        top: 10px;
      }
      100% {
        font-size: 1.3rem;
        opacity: 1;
        top: 10px;
      }
    }
  }
`;

export default Form;