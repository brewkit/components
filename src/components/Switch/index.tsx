import * as React from 'react';
import MuiSwitch from '@material-ui/core/Switch';
import { Props } from './types';


/**
 * Switches toggle the state of a single setting on or off.
 *
 * [Material-UI Docs](https://material-ui.com/components/switches/)
 *
 * > No differences in Brewkit.
 */
export const Switch = React.forwardRef(({
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => (


    <MuiSwitch ref={ref} {...otherProps} />


));


Switch.displayName = 'Switch';


export default Switch;
