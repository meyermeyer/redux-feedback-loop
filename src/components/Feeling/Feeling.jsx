import React, { Component } from 'react';
import {connect} from 'react-redux';
import Review from '../Review/Review'
import { Button, Card, CardContent, CardActions, Typography } from '@material-ui/core';
import {TextField, MenuItem, FormControl, InputLabel, Select} from '@material-ui/core';
import './Feeling.css';

class Feeling extends Component {
    state = {
        isFilled: false
    }

    handleChange = (event) => {
        console.log('in handleChange');
        // this.setState ({
        //     feeling: event.target.value
        // })
        this.props.dispatch({ type: 'UPDATE_FEEDBACK', payload: event.target.value, name: 'feeling' })
        if (!event.target.value) {
            this.setState ({
                isFilled: false
            })
        }
        else {
            this.setState ({
                isFilled: true
            })
        }
    }

    handleClick = () => {
        console.log('in handleClick-feeling');
        this.props.history.push('/understanding');
        
    }

    render() {
        console.log(this.state.isFilled);
        
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
                        <Typography>
                            <select onChange={this.handleChange} name="feeling">
                                <option value=""></option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </Typography>
                    </CardContent>
                    <CardActions style={{ justifyContent: 'center' }}>
                        <Button onClick={this.handleClick} variant="contained" color="primary" disabled={!this.state.isFilled}>Next</Button>
                    </CardActions>
                </Card>
                {/* <h2>How are you feeling today?</h2>
                <select onChange={this.handleChange} name="feeling">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <Button onClick={this.handleClick} variant="contained" color="primary" disabled={!this.state.isFilled}>Next</Button> */}
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
                    {/* <FormControl>
                    <InputLabel htmlFor="age-native-simple">Feeling</InputLabel>
                    <Select
                        native
                        value='feeling'
                        onChange={this.handleChange}
                        inputProps={{
                            name: 'age',
                            id: 'age-native-simple',
                        }}
                    >
                        <option value="" />
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Select>
                </FormControl> */}
                    {/* <TextField
                    id="feelingInput"
                    select
                    label="Select"
                    onChange={this.handleChange}
                    // SelectProps={{
                    //     MenuProps: {
                    //         className: classes.menu,
                    //     },
                    // }}
                    helperText="Please select your response"
                    margin="normal"
                    variant="outlined"
                >
                    <MenuItem> </MenuItem>
                    <MenuItem value="1">1</MenuItem>
                    <MenuItem value="2">2</MenuItem>
                    <MenuItem value="3">3</MenuItem>
                    <MenuItem value="4">4</MenuItem>
                    <MenuItem value="5">5</MenuItem>

                    ))}
                </TextField> */}
                </div>
                
                
            </>
        )
    }
}

export default connect()(Feeling);