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
    hasError,
    name,
    label,
    labelPlacement = 'end',
    value,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const labelClasses = {
        root: 'brew-Switch',
        labelPlacementStart: 'brew-Switch--labelPlacement-start',
        labelPlacementTop: 'brew-Switch--labelPlacement-top',
        labelPlacementBottom: 'brew-Switch--labelPlacement-bottom',
    };


    const controlClasses = {
        root: `brew-Switch__base ${hasError ? 'brew-Switch--hasError' : ''}`,
        disabled: 'brew-Switch--isDisabled',
        checked: 'brew-Switch--isChecked',
        switchBase: 'brew-Switch__thumbBase',
        track: 'brew-Switch__track',
        thumb: 'brew-Switch__thumb',
    };


    return (
        <FormControlLabel
            checked={isChecked}
            classes={labelClasses}
            control={(
                <MuiSwitch
                    classes={controlClasses}
                    inputRef={ref}
                    required={isRequired}
                    {...otherProps}
                />
            )}
            disabled={isDisabled}
            label={label && (
                <Typography className="brew-Switch__label" variant="body1">{label}</Typography>
            )}
            labelPlacement={labelPlacement}
            name={name}
            value={value}
        />
    );


});


Switch.displayName = 'Switch';


export default Switch;
