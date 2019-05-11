import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { withStyles, OutlinedInput, InputLabel, FormControl, Select } from '@material-ui/core';
import { connect } from 'react-redux'
// import OutlinedInput from '@material-ui/core/OutlinedInput';
// import InputLabel from '@material-ui/core/InputLabel';
// import FormControl from '@material-ui/core/FormControl';
// import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        // display: 'flex',
        // flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class ScaleSelect extends React.Component {
    state = {
        scale: '',
    };

    componentDidMount() {
        this.setState({
            labelWidth: ReactDOM.findDOMNode(this.InputLabelRef).offsetWidth,
        });
    }

    handleChange = () => event => {
        console.log('in handleChange')
        this.setState({ scale: event.target.value });
        this.props.dispatch({ type: 'UPDATE_FEEDBACK', payload: event.target.value, name: 'feeling' })
        

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

ScaleSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

// export default withStyles(connect(styles)(ScaleSelect));

export default connect()(withStyles(styles)(ScaleSelect));