import React from "react";
import styled from "styled-components";

const BankItemStyles = styled.div`
  .bankItem__name {
    font-size: 2.2rem;
  }
  .bankItem__desc {
    font-size: 1.6rem;
    font-family: "RobotoMono Regular";
    margin-top: 1rem;
  }
  .bankItem__age{
      font-size: 1.5rem;
  }
  @media only screen and (max-width: 768px) {
    .bankItem__desc {
      height: 350px;
    }
  }
`;

export default function BankItem({ name, desc, age, path }) {
  return (
    <BankItemStyles>
      <h3 className="bankItem__name">{name}</h3>
      <p className="bankItem__desc">{desc}</p>
      <p className="bankItem__age">{age}</p>
      <a href={path}>{path}</a>
    </BankItemStyles>
  );
}
