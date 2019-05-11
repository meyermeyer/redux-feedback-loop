import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import Review from '../Review/Review'

class Support extends Component {
    state = {
        isFilled: false
    }

    handleChange = (event) => {
        console.log('in handleChange');
        // this.setState ({
        //     feeling: event.target.value
        // })
        this.props.dispatch({ type: 'UPDATE_FEEDBACK', payload: event.target.value, name: 'support' })
        if (!event.target.value) {
            this.setState({
                isFilled: false
            })
        }
        else {
            this.setState({
                isFilled: true
            })
        }
    } 

    handleClick = () => {
        console.log('in handleClick-support');
        this.props.history.push('/comments');
    }

    render() {
        return (
            <>
                <h2>Support!</h2>
                <select onChange={this.handleChange} name="support">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <Button onClick={this.handleClick} variant="contained" color="primary" disabled={!this.state.isFilled}>Next</Button>
                <Review />
            </>
        )
    }
}

export default connect()(Support);