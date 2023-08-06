
import './App.css';
import React from 'react';
// import { Counter } from './features/counter/Counter';
import { Navbar } from './Components/Navbar';
import { Shop } from './Components/Shop';

function App() {
  return (
    <div className="App">
        <Navbar/>
      <div className="container">
        <Shop/>
      </div>
    </div>
  );
}

export default App;
