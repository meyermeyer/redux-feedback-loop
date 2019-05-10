import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Form from '../Form/Form';
import Success from '../Success/Success';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          <Form />
          <Success />
        </header>
        <br/>
      </div>
    );
  }
}

export default App;
