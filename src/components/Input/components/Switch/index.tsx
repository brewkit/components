import React from 'react';
import MuiSwitch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@components/Typography';
import { Props } from './types';


/**
 * Switches toggle the state of a single setting on or off.
 */
export const Switch = React.forwardRef(({
    isChecked,
    isDisabled,
    isRequired,
    name,
    label,
    labelPlacement = 'end',
    value,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        root: 'brew-Switch',
        disabled: 'brew-Switch--isDisabled',
        checked: 'brew-Switch--isChecked',
        switchBase: 'brew-Switch__switchBase',
        track: 'brew-Switch__track',
        thumb: 'brew-Switch__thumb',
    };


    return (
        <FormControlLabel
            checked={isChecked}
            control={(
                <MuiSwitch
                    classes={classes}
                    required={isRequired}
                    {...otherProps}
                />
            )}
            disabled={isDisabled}
            label={<Typography variant="body1">{label}</Typography>}
            labelPlacement={labelPlacement}
            name={name}
            ref={ref}
            value={value}
        />
    );


});


Switch.displayName = 'Switch';


export default Switch;
