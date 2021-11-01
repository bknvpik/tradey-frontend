import React from 'react';
import './App.css';
import axios from 'axios';
import ActionButton from './components/ActionButton/ActionButton';
import { SignIn } from './pages/SignInPage/SignIn';
import { SignUp } from './pages/SignUpPage/SignUp';
import { Navigation } from './components/Navigation/Navigation';
import { Item } from './components/Item/Item';
import { Browse } from './pages/Browse/Browse';
import { AddItem } from './pages/AddItem.tsx/AddItem';
import ItemViewLayout from './layouts/ItemViewLayout/ItemViewLayout';
import ItemView from './pages/ItemView/ItemView';
import { Routing } from './services/Routing';


function App() {
  return (
    <div className="App">
      {/* <SignIn/> */}

      <Routing>
      </Routing>
    </div>
  );
}

export default App;
