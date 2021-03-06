import React from "react";
import BankItem from "./Components/BankItem";
import useInitialState from "./hooks/useInitialState";
import ProyectStyle from './assets/Styles/elements/ProyectStyle.js';

const API = "https://api.jsonbin.io/b/604006e581087a6a8b95b784";



export default function App() {
  const initialState = useInitialState(API);

  return (
    <ProyectStyle>
      <div className="container">
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
      </div>
    </ProyectStyle>
  );
}
