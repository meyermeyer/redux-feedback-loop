import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review'
import Button from '@material-ui/core/Button'

class Form extends Component {
    render() {
        return (
            <form>
                <Feeling />
                <Understanding />
                <Support />
                <Comments />
                <Review />
                <Button variant="contained" color="secondary" disabled>Submit</Button>
            </form>
        )
    }
}

const mapReduxStateToProps = (reduxState) => {
    return {
        reduxState
    }
}

export default connect(mapReduxStateToProps)(Form);