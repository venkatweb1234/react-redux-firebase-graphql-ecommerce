import React from 'react';
import Header from './components/Header/header-component';
import Homepage from './components/pages/page-compoent';
import './default.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main">
        <Homepage />
      </div>
    </div>
  );
}

export default App;
