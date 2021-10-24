import React from 'react';
import './App.css';
import axios from 'axios';
import ActionButton from './components/ActionButton/ActionButton';
import { SignIn } from './pages/SignInPage/SignIn';
import { SignUp } from './pages/SignUpPage/SignUp';


function App() {
  return (
    <div className="App">
      <SignIn/>
    </div>
  );
}

export default App;
