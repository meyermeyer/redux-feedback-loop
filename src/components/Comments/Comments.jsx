import React, { Component } from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';

class Comments extends Component {
    handleChange = (event) => {
        console.log('in handleChange');
        // this.setState ({
        //     feeling: event.target.value
        // })
        this.props.dispatch({ type: 'UPDATE_FEEDBACK', payload: event.target.value, name: 'comments' })
    }

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
            </>
            
            // <>
            //     <h2>Comments!</h2>
            //     <input type="text" placeholder="comments"/>
            // </>
            
        )
    }
}



export default connect()(Comments);