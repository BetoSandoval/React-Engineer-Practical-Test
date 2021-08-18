import React, { useState,useEffect } from 'react'
import BankItem from './Components/BankItem';


export default function App() {
  const [banks, setBanks] = useState([]);

  useEffect(()=>{
    fetch('https://api.jsonbin.io/b/604006e581087a6a8b95b784')
    .then(Response => Response.json())
    .then( data => setBanks(data));
  }, []);
  
  return (
    <div>
      <div className='banks__allItems'>
        {banks.map( (item, index) => (
          <BankItem
            key={index}
            name={item.bankName}
            desc={item.description}
            age={item.age}
            path={item.url}
          />
        ))
        }
      </div>
    </div>
  );
}
