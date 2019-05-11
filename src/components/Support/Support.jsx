import React, { Component } from 'react';
import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import Review from '../Review/Review';
import ScaleSelect from '../ScaleSelect/ScaleSelect'

class Support extends Component {
    // state = {
    //     isFilled: false
    // }

    // handleChange = (event) => {
    //     console.log('in handleChange');
    //     // this.setState ({
    //     //     feeling: event.target.value
    //     // })
    //     // this.props.dispatch({ type: 'UPDATE_FEEDBACK', payload: event.target.value, name: 'support' })
    //     // if (!event.target.value) {
    //     //     this.setState({
    //     //         isFilled: false
    //     //     })
    //     // }
    //     // else {
    //     //     this.setState({
    //     //         isFilled: true
    //     //     })
    //     // }
    // } 

    handleClick = () => {
        console.log('in handleClick-support');
        this.props.history.push('/comments');
    }

    render() {
        return (
            <>
                <Card >
                    <CardContent>
                        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                        </Typography> */}
                        <Typography variant="h5" component="h2">
                            How well are you being supported?
                        </Typography>
                        <ScaleSelect name="Support"/>
                        {/* <Typography>
                            <select onChange={this.handleChange} name="support">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </Typography> */}
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button onClick={this.handleClick} variant="contained" color="primary" disabled={!this.props.reduxState.feedbackReducer.support}>Next</Button>
                    </CardActions>
                </Card>
                {/* <h2>Support!</h2>
                <select onChange={this.handleChange} name="support">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <Button onClick={this.handleClick} variant="contained" color="primary" disabled={!this.state.isFilled}>Next</Button> */}
                <Review />
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapReduxStateToProps)(Support);