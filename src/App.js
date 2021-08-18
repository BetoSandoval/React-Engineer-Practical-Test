import React from "react";
import BankItem from "./Components/BankItem";
import useInitialState from "./hooks/useInitialState";
import styled from "styled-components";

const API = "https://api.jsonbin.io/b/604006e581087a6a8b95b784";

const ProyectStyle = styled.div`
  padding: 10rem 0;
  .banks__allItems {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 5rem;
    margin-top: 5rem;
  }
`;

export default function App() {
  const initialState = useInitialState(API);

  return (
    <ProyectStyle>
      <div className="banks__allItems">
        {initialState.map((item, index) => (
          <BankItem
            key={index}
            name={item.bankName}
            desc={item.description}
            age={item.age}
            path={item.url}
          />
        ))}
      </div>
    </ProyectStyle>
  );
}
