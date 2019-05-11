import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Review from '../Review/Review'

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
        if (this.props.feedback.comments=="") {
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
                <h2>Comments!</h2>
                <TextField
                    label="Comments"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    onChange={this.handleChange}
                />
                <Review isFilled={this.state.isFilled} />
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