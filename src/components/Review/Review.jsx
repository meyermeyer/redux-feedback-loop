import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

class Review extends Component {
    state = {
        isFilled: false
    }

    // componentDidMount() {
    //     this.getFeedback();
    // }

    // getFeedback = () => {
    //     this.props.reduxState.feedback
    // }

    render() {
        return (
            <>
                <h2>Review</h2>
                <ul>
                    <li>Feeling: {this.props.feedback.feeling}</li>
                    <li>Understanding: {this.props.feedback.understanding}</li>
                    <li>Support: {this.props.feedback.support}</li>
                    <li>Comments: {this.props.feedback.comments}</li>
                </ul>
                <Button variant="contained" color="secondary" disabled>Submit</Button>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {
        feedback : reduxState.feedbackReducer
    }
}

export default connect(mapReduxStateToProps)(Review);
