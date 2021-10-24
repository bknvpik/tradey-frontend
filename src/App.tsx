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


function App() {
  return (
    <div className="App">
      {/* <SignIn/> */}
      {/* <Navigation
        buttons={[
          { type: "button", theme: "nav", children: "browse" },
          { type: "button", theme: "nav", children: "add item" },
          { type: "button", theme: "nav", children: "about" },
          { type: "button", theme: "nav", children: "my profile" },
          { type: "button", theme: "nav", children: "sign out" },
        ]}
      /> */}
      <SignIn />
    </div>
  );
}

export default App;
