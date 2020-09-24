import * as React from 'react';
import { withStyles } from '@material-ui/core/styles';
import MuiRadio from '@material-ui/core/Radio';
import { Props } from './types';


/**
 * Radio buttons allow the user to select one option from a set.
 *
 * [Material-UI Docs](https://material-ui.com/components/radio-buttons/)
 *
 *
 * > No differences in Brewkit.
 *
 */
export const Radio = React.forwardRef(({
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    return (
        <MuiRadio ref={ref} {...otherProps} />
    );


});


Radio.displayName = 'Radio';


export default Radio;
