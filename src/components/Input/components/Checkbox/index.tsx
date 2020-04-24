import React from 'react';
import MuiCheckbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Check, Remove } from '@material-ui/icons';
import Typography from '@components/Typography';
import { Props } from './types';


/**
 * Checkboxes allow the user to select one or more items from a set and can be used to turn an option on or off.
 */
export const Checkbox = React.forwardRef(({
    isChecked,
    isDisabled,
    isIndeterminate,
    hasError,
    isRequired,
    name,
    label,
    labelPlacement = 'end',
    value,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const labelClasses = {
        root: 'brew-Checkbox',
        labelPlacementStart: 'brew-Checkbox--labelPlacement-start',
        labelPlacementTop: 'brew-Checkbox--labelPlacement-top',
        labelPlacementBottom: 'brew-Checkbox--labelPlacement-bottom',
    };


    const controlClasses = {
        root: `brew-Checkbox__base ${hasError ? 'brew-Checkbox--hasError' : ''}`,
        disabled: 'brew-Checkbox--isDisabled',
        checked: 'brew-Checkbox--isChecked',
        indeterminate: 'brew-Checkbox--isIndeterminate',
    };


    const UncheckedControl = (
        <div className="brew-Checkbox__box" />
    );


    const CheckedControl = (
        <div className="brew-Checkbox__box">
            <Check className="brew-Checkbox__icon" color="inherit" />
        </div>
    );


    const IndeterminateControl = (
        <div className="brew-Checkbox__box">
            <Remove className="brew-Checkbox__icon" color="inherit" />
        </div>
    );


    return (
        <FormControlLabel
            checked={isChecked}
            classes={labelClasses}
            control={(
                <MuiCheckbox
                    checkedIcon={CheckedControl}
                    classes={controlClasses}
                    icon={UncheckedControl}
                    indeterminate={isIndeterminate}
                    indeterminateIcon={IndeterminateControl}
                    inputRef={ref}
                    required={isRequired}
                    {...otherProps}
                />
            )}
            disabled={isDisabled}
            label={label && (
                <Typography className="brew-Checkbox__label" variant="body1">{label}</Typography>
            )}
            labelPlacement={labelPlacement}
            name={name}
            value={value}
        />
    );


});


Checkbox.displayName = 'Checkbox';


export default Checkbox;
