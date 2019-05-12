import React, { Component } from 'react';
import { Button, Card, CardContent, CardActions, Typography  } from '@material-ui/core';
import { connect } from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import './Review.css'



class Review extends Component {

    handleClick = () => {
        console.log('in handleClick-review');
        
        axios.post('/feedback', this.props.feedback)
        .then(response => {
            console.log('back from POST /feedback', response);
            this.props.history.push('/success')
        })//end .then
        .catch(error => {
            console.log('error in POST /feedback', error);
        })//end .catch
    };// end handleClick

    render() {
        console.log(this.props.feedback);
        
        return (
            <div>
                {/* <Router>
                    <Route exact path='/success' component={Success} />
                </Router> */}
                <Card >
                    <CardContent>
                        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                        </Typography> */}
                        <Typography variant="h5" component="h2">
                        Review Your Feedback
                        </Typography>
                        <Typography>
                        Feeling: {this.props.feedback.feeling}
                        </Typography>
                        <Typography component="p">
                        Understanding: {this.props.feedback.understanding}
                        </Typography>
                        <Typography>
                            Support: {this.props.feedback.support}
                        </Typography>
                        <Typography>
                            Comments: {this.props.feedback.comments}
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button onClick={this.handleClick} variant="contained" color="secondary" disabled={!this.props.isFilled}>Submit</Button>
                    </CardActions>
                    </Card>
                {/* <h2>Review</h2>
                <ul>
                    <li>Feeling: {this.props.feedback.feeling}</li>
                    <li>Understanding: {this.props.feedback.understanding}</li>
                    <li>Support: {this.props.feedback.support}</li>
                    <li>Comments: {this.props.feedback.comments}</li>
                </ul>
                <Button onClick={this.handleClick} variant="contained" color="secondary" disabled={!this.props.isFilled}>Submit</Button> */}
            </div>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {
        feedback : reduxState.feedbackReducer
    }
}
// export default withRouter(connect(mapRedux)(Review))
export default withRouter(connect(mapReduxStateToProps)(Review));
