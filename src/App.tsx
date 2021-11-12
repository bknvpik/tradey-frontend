import { createContext, useContext, useEffect, useState } from 'react';
import { Cookies, useCookies } from 'react-cookie';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import { AuthContext } from './context/AuthContext';
import { Homepage } from './pages/Homepage/Homepage';
import { Routing } from './services/Routing';

const App = () => {
  
  const [auth, setAuth] = useState(false);

  return (
    <div className="App">
    <AuthContext.Provider value={{ auth, setAuth }}>
      <Routing>
      </Routing>
    </AuthContext.Provider>
    </div>
  );
}

export default App;
