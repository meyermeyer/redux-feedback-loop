import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';

class Review extends Component {
    render() {
        return (
            <>
                <h2>Review</h2>
                <Button variant="contained" color="secondary" disabled>Submit</Button>
            </>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapReduxStateToProps)(Review);
