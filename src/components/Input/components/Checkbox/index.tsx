import React from 'react';
import { Checkbox as MuiCheckbox, FormControlLabel } from '@material-ui/core';
import Icon from '@components/Icon';
import Typography from '@components/Typography';
import { Props } from './types';


/**
 * Checkboxes allow the user to select one or more items from a set and can be used to turn an option on or off.
 */
export const Checkbox = React.forwardRef(({
    isChecked,
    isDisabled,
    isIndeterminate,
    isRequired,
    label,
    labelPlacement = 'end',
    value,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        root: 'brew-Checkbox',
        disabled: 'brew-Checkbox--isDisabled',
        checked: 'brew-Checkbox--isChecked',
        indeterminate: 'brew-Checkbox--isIndeterminate',
    };


    const UncheckedControl = (
        <div className="brew-Checkbox__box" />
    );


    const CheckedControl = (
        <div className="brew-Checkbox__box">
            <Icon className="brew-Checkbox__icon" size="large">check</Icon>
        </div>
    );


    const IndeterminateControl = (
        <div className="brew-Checkbox__box">
            <Icon className="brew-Checkbox__icon" size="large">remove</Icon>
        </div>
    );


    return (
        <FormControlLabel
            checked={isChecked}
            control={(
                <MuiCheckbox
                    checkedIcon={CheckedControl}
                    classes={classes}
                    icon={UncheckedControl}
                    indeterminate={isIndeterminate}
                    indeterminateIcon={IndeterminateControl}
                    required={isRequired}
                    {...otherProps}
                />
            )}
            disabled={isDisabled}
            label={<Typography variant="body1">{label}</Typography>}
            labelPlacement={labelPlacement}
            ref={ref}
            value={value}
        />
    );


});


Checkbox.displayName = 'Checkbox';


export default Checkbox;
