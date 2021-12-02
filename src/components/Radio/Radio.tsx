

import * as React from 'react';
import MuiRadio from '@material-ui/core/Radio';
import { RadioProps } from './Radio.types';


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
}: RadioProps, ref: React.Ref<any>): React.ReactElement => (


    <MuiRadio ref={ref} {...otherProps} />


));


Radio.displayName = 'Radio';


export default Radio;

