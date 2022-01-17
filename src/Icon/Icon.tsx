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
export const Icon = React.forwardRef(
    (props: BkIconProps, ref: React.Ref<HTMLElement>): React.ReactElement => (
        <MuiIcon ref={ref} {...props} />
    ),
);

Icon.displayName = 'BkIcon';

export default Icon;
