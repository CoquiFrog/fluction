import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Link } from 'react-router-dom';
import router from './router';
import './index.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      { router }
       
       
      </div>
    );
  }
}

export default App;



