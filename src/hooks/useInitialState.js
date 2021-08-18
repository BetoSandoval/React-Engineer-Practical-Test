import { useState,useEffect } from 'react';

const useInitialState = (API) => {
    const [banks, setBanks] = useState([]);

    useEffect(()=>{
      fetch(API)
      .then(Response => Response.json())
      .then( data => setBanks(data));
    }, []);

    return  banks;
}

export default useInitialState;