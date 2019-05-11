import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import axios from 'axios';
// import { HashRouter as Router, Link, Route } from 'react-router-dom';
import Success from '../Success/Success'


class Review extends Component {

    handleClick = () => {
        console.log('in handleClick-review');
        // this.props.history('/success')
        axios.post('/feedback', this.props.feedback)
        .then(response => {
            console.log('back from POST /feedback', response);
        })//end .then
        .catch(error => {
            console.log('error in POST /feedback', error);
        })//end .catch
    };// end handleClick

    render() {
        console.log(this.props.feedback);
        
        return (
            <>
                {/* <Router>
                    <Route exact path='/success' component={Success} />
                </Router> */}
                
                <h2>Review</h2>
                <ul>
                    <li>Feeling: {this.props.feedback.feeling}</li>
                    <li>Understanding: {this.props.feedback.understanding}</li>
                    <li>Support: {this.props.feedback.support}</li>
                    <li>Comments: {this.props.feedback.comments}</li>
                </ul>
                <Button onClick={this.handleClick} variant="contained" color="secondary" disabled={!this.props.isFilled}>Submit</Button>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {
        feedback : reduxState.feedbackReducer
    }
}

export default connect(mapReduxStateToProps)(Review);
