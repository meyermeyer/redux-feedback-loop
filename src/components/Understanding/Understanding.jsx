import React, { Component } from 'react';
import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import Review from '../Review/Review'
import ScaleSelect from '../ScaleSelect/ScaleSelect'

class Understanding extends Component {
    // state = {
    //     isFilled: false
    // }

    // handleChange = (event) => {
    //     console.log('in handleChange');
    //     // this.setState ({
    //     //     feeling: event.target.value
    //     // })
    //     this.props.dispatch({ type: 'UPDATE_FEEDBACK', payload: event.target.value, name: 'understanding' })
    //     if (!event.target.value) {
    //         this.setState({
    //             isFilled: false
    //         })
    //     }
    //     else {
    //         this.setState({
    //             isFilled: true
    //         })
    //     }
    // } 

    handleClick = () => {
        console.log('in handleClick-understanding');
        this.props.history.push('/support');
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
                            How well are you understanding today's content?
                        </Typography>
                        <ScaleSelect name='Understanding'/>
                        {/* <Typography>
                            <select onChange={this.handleChange} name="understanding">
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
                        <Button onClick={this.handleClick} variant="contained" color="primary" disabled={!this.props.reduxState.feedbackReducer.understanding}>Next</Button>
                    </CardActions>
                </Card>
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

export default connect(mapReduxStateToProps)(Understanding);