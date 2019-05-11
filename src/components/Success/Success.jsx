import React, { Component } from 'react';
import {connect} from 'react-redux';
// import {HashRouter, withRouter} from 'react-router-dom'

class Success extends Component {
    render () {
        return(
            <h2>Success!</h2>
        )
    }
}


// export default withRouter(connect()(Success));
export default connect()(Success);