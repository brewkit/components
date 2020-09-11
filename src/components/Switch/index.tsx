import * as React from 'react';
import MuiSwitch from '@material-ui/core/Switch';
import { Props } from './types';


/**
 * The Switch component can be used to group related buttons.
 *
 * [Material-UI Docs](https://material-ui.com/components/button-group/)
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
