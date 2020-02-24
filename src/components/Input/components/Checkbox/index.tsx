import React from 'react';
import { Checkbox as MuiCheckbox } from '@material-ui/core';
import Icon from '@components/Icon';
import { Props } from './types';


export const Checkbox = React.forwardRef(({
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        root: 'brew-Checkbox',
    };


    const UncheckedControl = (
        <div className="brew-Checkbox__box" />
    );


    const CheckedControl = (
        <div className="brew-Checkbox__box">
            <Icon className="brew-Checkbox__icon" size="large">check</Icon>
        </div>
    );


    return (
        <MuiCheckbox
            checkedIcon={CheckedControl}
            classes={classes}
            icon={UncheckedControl}
            ref={ref}
            {...otherProps}
        />
    );


});


Checkbox.displayName = 'Checkbox';


export default Checkbox;
