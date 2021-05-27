import styled from 'styled-components';

const Acordion = styled.div`
  .big-view {
    display: none;
    width: 190px;
    max-width: 190px;
  }
  .big-view h3 {
    font-size: 1.9rem;
    margin-bottom: 2.4rem;
    font-weight: 400;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  ul a {
    display: block;
    padding: .8rem 0;
    margin-bottom: .8rem;
    color: rgba(0,0,0,.56);
    text-decoration: none;
  }
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
  @media (min-width: 1024px) {
    .small-view {
      display: none;
    }
    .big-view {
      display: block;
    }
  }
`;

export default Acordion;