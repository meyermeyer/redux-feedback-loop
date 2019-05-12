import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {connect} from 'react-redux'

const styles = theme => ({
    root: {
        // display: 'flex',
    },
    formControl: {
        margin: theme.spacing.unit * 3,
    },
    group: {
        margin: `${theme.spacing.unit}px 0`,
        display: 'inline'
    },
});

class RadioButtonsGroup extends React.Component {
    state = {
        value: '',
    };

    handleChange = event => {
        this.setState({ value: event.target.value });
        this.props.dispatch({ type: 'UPDATE_FEEDBACK', payload: event.target.value, name: this.props.name.toLowerCase() })
    };

    render() {
        const { classes } = this.props;

        return (
            <div className={classes.root}>
                <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">Select One</FormLabel>
                    <RadioGroup
                        aria-label="Feedback"
                        name="feedback"
                        className={classes.group}
                        value={this.state.value}
                        onChange={this.handleChange}
                    >
                        <FormControlLabel value="1" control={<Radio />} label="1" />
                        <FormControlLabel value="2" control={<Radio />} label="2" />
                        <FormControlLabel value="3" control={<Radio />} label="3" />
                        <FormControlLabel value="4" control={<Radio />} label="4" />
                        <FormControlLabel value="5" control={<Radio />} label="5" />
                    </RadioGroup>
                </FormControl>
            
            </div>
        );
    }
}

RadioButtonsGroup.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect()(withStyles(styles)(RadioButtonsGroup));

