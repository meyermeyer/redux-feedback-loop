import React, { Component } from 'react';
import {connect} from 'react-redux'

class Success extends Component {
    render () {
        return(
            <h2>Success!</h2>
        )
    }
}

export default connect()(Success);