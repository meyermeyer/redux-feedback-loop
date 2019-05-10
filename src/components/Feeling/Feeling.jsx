import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
    render () {
        return (
            <p>Feelings Component Here</p>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {
        itemsInCart: reduxState.cartReducer
    }
}

export default connect(mapReduxStateToProps)(Feeling);