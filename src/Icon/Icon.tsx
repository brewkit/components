import * as React from 'react';
import MuiIcon from '@material-ui/core/Icon';
import { IconProps as MUIIconProps } from '@material-ui/core/Icon';

export type BkIconProps = MUIIconProps;


/**
 * Icon component which passes icons from material-ui
 *
 * [Material-UI Docs](https://mui.com/components/icons/)
 *
 *
 * > TODO: Add custom icons used by OVRC
 *
 */
const Icon = React.forwardRef((props: BkIconProps, ref: React.Ref<HTMLSpanElement>): React.ReactElement => (
    <MuiIcon ref={ref} {...props} />
));


Icon.displayName = 'Icon';


export default Icon;

