import React from 'react';
import logo from './logo.svg';
import './App.scss';
import {db,storage,auth} from './firebase'

import Main from './Page/Main/Main';

function App() {
  
  return (
    <div className="App">
      <Main/>

    </div>
  );
}

export default App;
