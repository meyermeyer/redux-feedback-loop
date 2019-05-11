import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Form from '../Form/Form';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Success from '../Success/Success';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Feedback!</h1>
          <h4><i>Don't forget it!</i></h4>
          
        </header>
        <br/>
        <Router>
          <Route exact path='/' component={Feeling} />
          <Route exact path='/understanding' component={Understanding} />
          <Route exact path='/support' component={Support} />
          <Route exact path='/comments' component={Comments} />
          <Route exact path='/success' component={Success} />
          {/* <Form />
          <Success /> */}
        </Router>
        
      </div>
    );
  }
}

export default App;
