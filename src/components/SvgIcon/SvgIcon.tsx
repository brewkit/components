

import * as React from 'react';
import MuiSvgIcon from '@material-ui/core/SvgIcon';
import { SvgIconProps } from './SvgIcon.types';


/**
 * SvgIcon component which passes custom SVG to create an icon
 *
 * [Material-UI Docs](https://mui.com/api/svg-icon/)
 *
 */
export const SvgIcon = React.forwardRef(({
    ...otherProps
}: SvgIconProps, ref: React.Ref<any>): React.ReactElement => (


    <MuiSvgIcon ref={ref} {...otherProps} />


));


SvgIcon.displayName = 'SvgIcon';


export default SvgIcon;

