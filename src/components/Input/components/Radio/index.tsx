import React from 'react';
import MuiRadio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@components/Typography';
import { Props } from './types';


/**
 * Radios allow the user to select one of multiple items from a set.
 */
export const Radio = React.forwardRef(({
    isChecked,
    isDisabled,
    isRequired,
    hasError,
    label,
    labelPlacement = 'end',
    value,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const labelClasses = {
        root: 'brew-Radio',
        labelPlacementStart: 'brew-Radio--labelPlacement-start',
        labelPlacementTop: 'brew-Radio--labelPlacement-top',
        labelPlacementBottom: 'brew-Radio--labelPlacement-bottom',
    };


    const controlClasses = {
        root: `brew-Radio__base ${hasError ? 'brew-Radio--hasError' : ''}`,
        disabled: 'brew-Radio--isDisabled',
        checked: 'brew-Radio--isChecked',
    };


    const UncheckedControl = (
        <div className="brew-Radio__ring" />
    );


    const CheckedControl = (
        <div className="brew-Radio__ring">
            <div className="brew-Radio__pip" />
        </div>
    );


    return (
        <FormControlLabel
            checked={isChecked}
            classes={labelClasses}
            control={(
                <MuiRadio
                    checkedIcon={CheckedControl}
                    classes={controlClasses}
                    icon={UncheckedControl}
                    inputRef={ref}
                    required={isRequired}
                    {...otherProps}
                />
            )}
            disabled={isDisabled}
            label={label && (
                <Typography className="brew-Radio__label" variant="body1">{label}</Typography>
            )}
            labelPlacement={labelPlacement}
            name={name}
            value={value}
        />
    );


});


Radio.displayName = 'Radio';


export default Radio;
