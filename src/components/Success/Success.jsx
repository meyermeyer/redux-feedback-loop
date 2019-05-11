import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core'
// import {HashRouter, withRouter} from 'react-router-dom'

class Success extends Component {

    handleClick = ()=> {
        this.props.history.push('/');
    }
    render () {
        return(
            <>
                <h2>Success!</h2>

                <Button onClick={this.handleClick} variant="contained" color="secondary">Leave New Feedback</Button>
            </>
            
        )
    }
}


// export default withRouter(connect()(Success));
export default connect()(Success);