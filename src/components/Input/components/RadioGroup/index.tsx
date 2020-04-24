import React from 'react';
import MuiRadioGroup from '@material-ui/core/RadioGroup';
import { Props } from './types';


/**
 * <RadioGroup /> is a helpful wrapper used to group Radio components that provides an easier API, and proper keyboard
 * accessibility to the group.
 */
export const RadioGroup = React.forwardRef(({
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = {
        root: `brew-RadioGroup ${className ? String(className) : ''}`,
    };


    return (
        <MuiRadioGroup
            classes={classes}
            ref={ref}
            {...otherProps}
        />
    );


});


RadioGroup.displayName = 'RadioGroup';


export default RadioGroup;
