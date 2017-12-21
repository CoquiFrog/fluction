import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';
import router from './router';
import './index.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      { router }
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <img className="giantparty" src="/publicimages/play4.png"></img>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;



