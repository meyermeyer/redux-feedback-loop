import React, { Component } from 'react';
import { Button, Card, CardContent, CardActions, Typography  } from '@material-ui/core';
import { connect } from 'react-redux';
import axios from 'axios';
import {withRouter} from 'react-router-dom'
import './Review.css'



class Review extends Component {
    componentDidMount () {
        this.setIconToDisplay();
    }

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

    setIconToDisplay = (formName) => {
        let expression = this.props.feedback[formName];
        console.log(expression);
        if (expression == 1) {
            return <i class="material-icons satisfactionIcons">sentiment_very_dissatisfied_black_72x72</i>
        }
        else if (expression ==2 ) {
            return <i class="material-icons satisfactionIcons">sentiment_dissatisfied_black_72x72</i>
        }
        else if (expression == 3 ) {
            return <i class="material-icons satisfactionIcons">sentiment_neutral_72x72</i>
        }
        else if (expression == 4 ) {
            return <i class="material-icons satisfactionIcons">sentiment_satisfied_black_72x72</i>
        }
        else if (expression == 5 ) {
            return <i class="material-icons satisfactionIcons">sentiment_very_satisfied_black_72x72</i>
        }
        else {
            return ''
        }
        
        
        
    }

    testFunction = () => {
        return 4
    }

    render() {
        console.log(this.props.feedback);
        console.log(this.props.feedback.feeling);
        
        
        
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
                            Feeling: {this.setIconToDisplay('feeling')}
                        </Typography>
                        <Typography component="p">
                            Understanding: {this.setIconToDisplay('understanding')}
                        </Typography>
                        <Typography>
                            Support: {this.setIconToDisplay('support')}
                        </Typography>
                        <Typography>
                            Comments: {this.props.feedback.comments}
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button onClick={this.handleClick} variant="contained" color="secondary" disabled={!this.props.isFilled}>Submit</Button>
                    </CardActions>
                    </Card>
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
