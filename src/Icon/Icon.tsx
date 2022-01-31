

import * as React from 'react';
import MuiIcon from '@material-ui/core/Icon';
import { IconProps } from './Icon.types';


/**
 * Icon component which passes icons from material-ui
 *
 * [Material-UI Docs](https://mui.com/components/icons/)
 *
 *
 * > TODO: Add custom icons used by OVRC
 *
 */
export const Icon = React.forwardRef(({
    ...otherProps
}: IconProps, ref: React.Ref<any>): React.ReactElement => (


    <MuiIcon ref={ref} {...otherProps} />


));


Icon.displayName = 'Icon';


export default Icon;

