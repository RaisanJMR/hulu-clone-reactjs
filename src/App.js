import React from 'react';
import Header from './Header/Header'
import Nav from './Nav/Nav';
import './App.css';
import Result from './Result/Result';

function App() {
  return (
    <div className="app">
     
      {/* HEADER */}
      <Header/>
      {/* NAV */}
      <Nav/>
      {/* RESULT */}
      <Result/>
    </div>
  );
}

export default App;
