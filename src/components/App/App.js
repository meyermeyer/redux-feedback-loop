import React, { Component } from 'react';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Success from '../Success/Success';
import RadioSelect from '../RadioSelect/RadioSelect'
import {CardContent, Card, Typography} from '@material-ui/core'


class App extends Component {
  render() {
    return (
      <div className="App">
        <i class="material-icons">face</i>
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
        {/* <RadioSelect /> */}
          
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

