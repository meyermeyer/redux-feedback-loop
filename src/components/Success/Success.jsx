import React, { Component } from 'react';
import {connect} from 'react-redux';
import {Button} from '@material-ui/core';
import './Success.css'

// import {HashRouter, withRouter} from 'react-router-dom'

class Success extends Component {

    handleClick = ()=> {
        this.props.history.push('/');
        this.props.dispatch({type:'CLEAR_FEEDBACK'})
    }
    render () {
        return(
            <>
                <p><i class="material-icons" id="check-circle" >check_circle_black_72x72</i></p>
                <h2>Success!</h2>

                <Button onClick={this.handleClick} variant="contained" color="secondary"><i class="material-icons" id="add-icon" >add_black_72x72</i>Leave New Feedback</Button>
            </>
            
        )
    }
}


// export default withRouter(connect()(Success));
export default connect()(Success);