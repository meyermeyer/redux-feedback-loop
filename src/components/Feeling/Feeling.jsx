import React, { Component } from 'react';
import {connect} from 'react-redux';
import Review from '../Review/Review'
import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';
import {TextField, MenuItem, FormControl, InputLabel, Select} from '@material-ui/core';
import './Feeling.css';
import ScaleSelect from '../ScaleSelect/ScaleSelect'

class Feeling extends Component {
    // state = {
    //     isFilled: false
    // }

    // handleChange = (event) => {
    //     console.log('in handleChange');
    //     // this.setState ({
    //     //     feeling: event.target.value
    //     // })
    //     this.props.dispatch({ type: 'UPDATE_FEEDBACK', payload: event.target.value, name: 'feeling' })
    //     if (!event.target.value) {
    //         this.setState ({
    //             isFilled: false
    //         })
    //     }
    //     else {
    //         this.setState ({
    //             isFilled: true
    //         })
    //     }
    // }

    handleClick = () => {
        console.log('in handleClick-feeling');
        this.props.history.push('/understanding');
        
    }

    render() {
        // console.log(this.state.isFilled);
        
        return (
            <>
                <Card >
                    <CardContent>
                        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
                        Word of the Day
                        </Typography> */}
                        <Typography variant="h5" component="h2">
                            How are you feeling today?
                        </Typography>
                            {/* pass name and placeholder to ScaleSelect so select displays right placeholder and dispatches correct key to feedbackReducer */}
                            <ScaleSelect name='Feeling'/>
                        {/* <Typography>
                            <select onChange={this.handleChange} name="feeling">
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
                        <Button onClick={this.handleClick} variant="contained" color="primary" disabled={!this.props.reduxState.feedbackReducer.feeling}>Next</Button>
                    </CardActions>
                </Card>
                
                <Review />
                <div>
                    {/* <Checkbox
                    // checked={this.state.checkedA}
                    // onChange={this.handleChange('checkedA')}
                    // value="checkedA"
                />
                <Checkbox
                // checked={this.state.checkedA}
                // onChange={this.handleChange('checkedA')}
                // value="checkedA"
                />
                <Checkbox
                // checked={this.state.checkedA}
                // onChange={this.handleChange('checkedA')}
                // value="checkedA"
                />
                <Checkbox
                // checked={this.state.checkedA}
                // onChange={this.handleChange('checkedA')}
                // value="checkedA"
                />
                <Checkbox
                // checked={this.state.checkedA}
                // onChange={this.handleChange('checkedA')}
                // value="checkedA"
                // /> */}
                    {/* this checkbox thing will be a stretch */}
                </div>
                
                
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {
        reduxState
    }
}


export default connect(mapReduxStateToProps)(Feeling);