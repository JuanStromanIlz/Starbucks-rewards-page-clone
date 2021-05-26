import styled from 'styled-components';

const Acordion = styled.div`
  .header {
    cursor: pointer;
    padding: .8rem 0;
    margin-bottom: .8rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .header h3 {
    font-size: 1.6rem;
    font-weight: 400;
  }
  .content {
    position: relative;
    height: 0px;
    transition: height .3s ease-in;
    overflow: hidden;
  }
  .content > div {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  .open-button {
    transform: rotate(-180deg);
  }
  .open {
    height: ${props => props.contentHeight ? props.contentHeight : 'auto'};
    transition: height .3s cubic-bezier(.25,.46,.45,.94);
  }
  .content ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .content ul a {
    display: block;
    padding: .8rem 0;
    margin-bottom: .8rem;
    color: rgba(0,0,0,.56);
    text-decoration: none;
  }
  .header .title {
    font-size: 1.6rem;
    font-weight: 400;
  }
  .header button {
    position: relative;
    background: transparent;
    border: 0;
    padding: 0;
    border-radius: 0;
    transition: all .2s ease-out;
  }
  .icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    vertical-align: middle;
  }
`;

export default Acordion;