

import * as React from 'react';
import { Icon as MuiIcon, IconProps as MuiIconProps } from '@material-ui/core';

export type BkIconProps = MuiIconProps;


/**
 * Icon component which passes icons from material-ui
 *
 * [Material-UI Docs](https://mui.com/components/icons/)
 *
 *
 * > TODO: Add custom icons used by OVRC
 *
 */
const Icon = React.forwardRef(({
    ...otherProps
}: BkIconProps, ref: React.Ref<any>): React.ReactElement => (
    <MuiIcon ref={ref} {...otherProps} />
));


Icon.displayName = 'BkIcon';


export default Icon;

