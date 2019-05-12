import React from 'react';
import PropTypes from 'prop-types';
import { withStyles, Icon } from '@material-ui/core/';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {connect} from 'react-redux';


import './RadioSelect.css'

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
                        id="satisfactionIcons"
                    >
                        
                        <FormControlLabel value="5" control={<Radio />} label={<i class="material-icons">sentiment_very_satisfied_black_72x72</i>} />
                        <FormControlLabel value="4" control={<Radio />} label={<i class="material-icons">sentiment_satisfied_black_72x72</i>} />
                        <FormControlLabel value="3" control={<Radio />} label={<i class="material-icons">sentiment_neutral_72x72</i>} />
                        <FormControlLabel value="2" control={<Radio />} label={<i class="material-icons">sentiment_dissatisfied_black_72x72</i>} />
                        <FormControlLabel value="1" control={<Radio />} label={<i class="material-icons">sentiment_very_dissatisfied_black_72x72</i>} />
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

