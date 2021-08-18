import styled from "styled-components";

const BankItemStyles = styled.div`
  .bankCard{
    width: 100%;
    height: 275px;
    border-radius: 12px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: space-between;
    border: 3px solid #343a40;
    background-color: #005c42;
  }
  .itemCard{
      margin-top: 1.4rem;
      color: #ffff;
  }
  .bankItem__name {
    font-size: 3.2rem;
    text-align: center;
    margin: 3rem;
  }
  .bankItem__desc {
    font-size: 1.5rem;
    font-family: sans-serif;
    text-align: center;
  }
  .bankItem__age{
      font-size: 1.5rem;
      text-align: center;
  }
  .pathItem{
      display: inline-block;
  } 
  @media only screen and (max-width: 800px) {
    .bankItem__desc {
      height: 40px; 
    }
    .pathItem {
      margin: 2rem 0rem; 
    }
  }
  @media only screen and (max-width: 600px) {
    .pathItem {
      margin: 2rem 1rem;
    }
  }
`;

export default BankItemStyles;