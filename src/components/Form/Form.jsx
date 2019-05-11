import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class NativeSelects extends React.Component {
    state = {
        scale: '',
        
    };

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    handleChange = () => event => {
        this.setState({ scale: event.target.value });
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                
                
                
               
                
                
                
                
                
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel
                        ref={ref => {
                            this.InputLabelRef = ref;
                        }}
                        htmlFor="outlined-age-native-simple"
                    >
                        Feeling
                    </InputLabel>
                    <Select
                        native
                        value={this.state.scale}
                        onChange={this.handleChange('scale')}
                        input={
                            <OutlinedInput
                                name="age"
                                labelWidth={this.state.labelWidth}
                                id="outlined-age-native-simple"
                            />
                        }
                    >
                        <option value="" />
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </Select>
                </FormControl>
                
            </div>
        );
    }
}

NativeSelects.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NativeSelects);



//this form actually isn't necessary
// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import Feeling from '../Feeling/Feeling';
// import Understanding from '../Understanding/Understanding';
// import Support from '../Support/Support';
// import Comments from '../Comments/Comments';
// import Success from '../Success/Success'
// import { HashRouter as Router, Link, Route } from 'react-router-dom';

// class Form extends Component {
//     render() {
//         return (
//             <Router>
//                 <form>
                    
//                     <Feeling />
//                     <Understanding />
//                     <Support />
//                     <Comments />
//                     <Success />
//                 </form>
//             </Router>
            
//         )
//     }
// }

// const mapReduxStateToProps = (reduxState) => {
//     return {
//         reduxState
//     }
// }

// export default connect(mapReduxStateToProps)(Form);