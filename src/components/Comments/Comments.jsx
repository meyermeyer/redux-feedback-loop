import React, { Component } from 'react';
import { connect } from 'react-redux';
// import TextField from '@material-ui/core/TextField';
import { Button, Card, CardContent, CardActions, Typography, TextField } from '@material-ui/core';
import Review from '../Review/Review'
import { withStyles } from '@material-ui/core/styles';


class Comments extends Component {
    state = {
        isFilled: false
    }

    handleChange = (event) => {
        console.log('in handleChange');
        // this.setState ({
        //     feeling: event.target.value
        // })
        this.props.dispatch({ type: 'UPDATE_FEEDBACK', payload: event.target.value, name: 'comments' })
        this.checkIsFilled();
    }

    checkIsFilled = () => {
        if (!this.props.feedback.comments || !this.props.feedback.feeling || !this.props.feedback.understanding || !this.props.feedback.support) {
            this.setState({
                isFilled: false
            })
        }
        else {
            this.setState({
                isFilled: true
            })
            
        }
    };


    render() {
        return (
            <>
                <Card >
                    <CardContent>
                        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                        </Typography> */}
                        <Typography variant="h5" component="h2">
                            Please leave comments here:
                        </Typography>
                            <TextField
                                label="Comments"
                                variant="outlined"
                                id="custom-css-outlined-input"
                                onChange={this.handleChange}
                            />
                    </CardContent>
                </Card>
                {/* <h2>Comments!</h2>
                <TextField
                    label="Comments"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    onChange={this.handleChange}
                /> */}
                <Review isFilled={this.state.isFilled} history={this.props.history}/>
                
            </>
            
            // <>
            //     <h2>Comments!</h2>
            //     <input type="text" placeholder="comments"/>
            // </>
            
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {
        feedback: reduxState.feedbackReducer
    }
}

export default connect(mapReduxStateToProps)(Comments);