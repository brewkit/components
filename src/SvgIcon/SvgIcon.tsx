

import * as React from 'react';
import { SvgIcon as  MuiSvgIcon, SvgIconProps as MUISvgIconProps} from '@material-ui/core';

export type BkSvgIconProps = MUISvgIconProps;

/**
 * SvgIcon component which passes custom SVG to create an icon
 *
 * [Material-UI Docs](https://mui.com/api/svg-icon/)
 *
 */
const SvgIcon = React.forwardRef(({
    ...otherProps
}: BkSvgIconProps, ref: React.Ref<any>): React.ReactElement => (
    <MuiSvgIcon ref={ref} {...otherProps} />
));


SvgIcon.displayName = 'BkSvgIcon';


export default SvgIcon;

