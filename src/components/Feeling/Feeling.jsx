import React, { Component } from 'react';
import { Checkbox, Button } from '@material-ui/core';
import {connect} from 'react-redux';

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
                <select onChange={this.handleChange} name="feeling">
                    <option onChange={this.handleChange} value="1">1</option>
                    <option onChange={this.handleChange} value="2">2</option>
                    <option onChange={this.handleChange} value="3">3</option>
                    <option onChange={this.handleChange} value="4">4</option>
                    <option onChange={this.handleChange} value="5">5</option>
                </select>
                <Button onClick={this.handleClick} variant="contained" color="primary">Next</Button>
            </>
        )
    }
}

export default connect()(Feeling);