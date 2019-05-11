import React, { Component } from 'react';
import { connect } from 'react-redux';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review'

class Form extends Component {
    render() {
        return (
            <form>
                <Feeling />
                <Understanding />
                <Support />
                <Comments />
                {/* <Review /> */}
                
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