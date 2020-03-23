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
    label,
    labelPlacement = 'end',
    value,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        root: 'brew-Radio',
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
            control={(
                <MuiRadio
                    checkedIcon={CheckedControl}
                    classes={classes}
                    icon={UncheckedControl}
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


Radio.displayName = 'Radio';


export default Radio;
