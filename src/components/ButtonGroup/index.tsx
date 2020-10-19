import * as React from 'react';
import MuiButtonGroup from '@material-ui/core/ButtonGroup';
import { Props } from './types';


/**
 * The ButtonGroup component can be used to group related buttons.
 *
 * [Material-UI Docs](https://material-ui.com/components/button-group/)
 *
 * > No differences in Brewkit.
 */
export const ButtonGroup = React.forwardRef(({
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => (


    <MuiButtonGroup ref={ref} {...otherProps} />


));


ButtonGroup.displayName = 'ButtonGroup';


export default ButtonGroup;
