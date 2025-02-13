import { createContext, useEffect, useState } from 'react';

export let TokenContext = createContext();

export default function TokenContextProvider({ children }) {
  const [token, setToken] = useState();

  function checkLoggedIn() {
    if (localStorage.getItem('token')) {
      setToken(localStorage.getItem('token'));
    }
  }

  useEffect(() => {
    checkLoggedIn();
  }, []);

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
}
