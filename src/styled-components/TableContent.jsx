import styled from 'styled-components';

const TableContent = styled.div`
  margin-bottom: 72px;
  .wrapper {
    padding-top: 4.8rem;
    background: ${props => props.theme.colors.lightSecondary};
  }
  .title {
    text-align: center;
    padding-left: 1.6rem;
    padding-right: 1.6rem;
  }
  .title h2 {
    font-size: 2.4rem;
    line-height: 1.385;
    font-weight: 600;
    padding-bottom: 1.6rem;
  }
  .table {
    width: 100%;
  }
  .table-options {
    display: flex;
    flex-flow: row nowrap;
  }
  .table-options button {
    position: relative;
    width: calc(100% / 5);
    background: transparent;
    border: 0;
    border-radius: 0;
    padding: .8rem;
    padding-bottom: 1.6rem;
  }
  .table-options button .star {
    font-size: 1.4rem;
    color: #cba258;
  }
  .table-options button h3 {
    font-weight: 600;
    font-size: 1.9rem;
  }
  .slider {
    display: block;
    width: 100%;
    position: absolute;
    height: 4px;
    background: #008248;
    bottom: 0;
    left: calc(100% * ${props => props.viewSelected});
    transition: all .5s ease-in-out;
  }
  .table-content {
    position: relative;
    margin: 0 auto;
    padding-bottom: 4.8rem;
    box-shadow: inset 0 7px 9px -7px rgb(0 0 0 / 14%);
    background: ${props => props.theme.colors.secondary};
  }
  .table-view > div {
    flex-grow: 1;
  }
  .active {
    opacity: 1;
    visibility: visible;
    transition: .3s ease-out;
    transition-property: opacity,visibility;
  }
  .inactive {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0;
    visibility: hidden;
    transition: .3s ease-out;
    transition-property: opacity,visibility;
  }
  .image-field {
    padding-top: 3.2rem;
    padding-bottom: 3.2rem;
  }
  .image-field > div {
    position: relative;
  }
  .absolute {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
  }
  .absolute img {
    width: 100%;
    opacity: 1;
    transition: opacity .15s ease-in;
  }
  .size-of-box {
    width: 100%;
    padding-top: 56.25%;
  }
  .text-field {
    padding-left: 1.6rem;
    padding-right: 1.6rem;
    text-align: center;
    opacity: 1;
    transition: opacity .15s ease-in;
  }
  .text-field h4 {
    font-size: 1.9rem;
    font-weight: 600;
    padding-bottom: 1.6rem;
  }
  @media (min-width: 768px) {
    margin-bottom: 128px;
    .wrapper {
      margin-bottom: 4.8rem;
    }
    .title h2 {
      font-size: 2.8rem;
      padding-bottom: 4.8rem;
    }
    .table-options {
      max-width: 540px;
      margin: 0 auto;
    }
    .table-options button h3 {
      font-size: 2.4rem;
    }
    .table-content {
      padding-bottom: 0;
    }
    .table-view {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 3.2rem;
      padding-bottom: 3.2rem;
    }
    .table-view > div {
      max-width: 375px;
    }
    .image-field {
      padding-top: 0;
      padding-bottom: 0;
      margin-right: 4.8rem;
    }
    .text-field {
      text-align: left;
    }
    .text-field h4 {
      font-size: 2.4rem;
    }
  }
`;

export default TableContent;