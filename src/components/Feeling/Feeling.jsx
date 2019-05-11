import React, { Component } from 'react';
import { Checkbox, Button } from '@material-ui/core';
import {connect} from 'react-redux';
import {TextField, MenuItem, FormControl, InputLabel, Select} from '@material-ui/core';
import './Feeling.css';

class Feeling extends Component {
    // state = {
    //     feeling: 1
    // }

    handleChange = (event) => {
        console.log('in handleChange');
        // this.setState ({
        //     feeling: event.target.value
        // })
        this.props.dispatch({ type: 'UPDATE_FEEDBACK', payload: event.target.value, name: 'feeling' })
    }
    render() {
        // console.log(this.state.feeling);
        
        return (
            <>
                <h2>How are you feeling today?</h2>
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
                <select onChange={this.handleChange} name="feeling">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <Button onClick={this.handleClick} variant="contained" color="primary">Next</Button>
            </>
        )
    }
}

export default connect()(Feeling);