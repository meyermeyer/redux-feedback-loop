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
import {CardContent, Card, Typography} from '@material-ui/core'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Card>
          <CardContent className="App-header">
            {/* <header className="App-header"> */}
            <Typography>
              <h1 className="App-title">Feedback!</h1>
              <h4 className="App-header-tag"><i>Don't forget it!</i></h4>
            </Typography>
              
            {/* </header> */}
          </CardContent>
        </Card>
        
          
        
        <br/>
        <Router>
          <Route exact path='/' component={Feeling} />
          <Route exact path='/understanding' component={Understanding} />
          <Route exact path='/support' component={Support} />
          <Route exact path='/comments' component={Comments} />
          <Route exact path='/success' component={Success} />
        </Router>
        
      </div>
    );
  }
}

export default App;

