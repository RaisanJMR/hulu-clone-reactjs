import React, { useState } from 'react';
import Header from './Header/Header';
import Nav from './Nav/Nav';
import './App.css';
import requests from './requests';
import Result from './Result/Result';

function App() {
  const [selectedOption, setSelectedOption] = useState(requests.fetchAnimation);
  return (
    <div className="app">
      {/* HEADER */}
      <Header />
      {/* NAV */}
      <Nav setSelectedOption={setSelectedOption}/>
      {/* RESULT */}
      <Result selectedOption={selectedOption} />
    </div>
  );
}

export default App;
