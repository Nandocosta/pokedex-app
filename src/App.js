import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import Login from './components/login/Login';

import Routes from './Routes';

import './App.css';

function App() {
  
  return(
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );

}
export default App;
