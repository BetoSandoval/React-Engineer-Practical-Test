import React from "react";
import BankItemStyles from "../assets/Styles/elements/BankItemStyles";

export default function BankItem({ name, desc, age, path }) {
  return (
    <BankItemStyles>
      <div className="bankCard">
        <h3 className="bankItem__name itemCard">{name}</h3>
        <p className="bankItem__desc itemCard">{desc}</p>
        <p className="bankItem__age itemCard">{`Age: ${age}`}</p>
        <a href={path} className="pathItem itemCard">{path}</a>
      </div>
    </BankItemStyles>
  );
}
