import * as React from 'react';
import {
    SvgIcon as MuiSvgIcon,
    SvgIconProps as MuiSvgIconProps,
} from '@material-ui/core';

export type BkSvgIconProps = MuiSvgIconProps;

/**
 * SvgIcon component which passes custom SVG to create an icon
 *
 * [Material-UI Docs](https://mui.com/api/svg-icon/)
 *
 */
const SvgIcon = React.forwardRef(
    (
        props: BkSvgIconProps,
        ref: React.Ref<SVGSVGElement>,
    ): React.ReactElement => <MuiSvgIcon ref={ref} {...props} />,
);

SvgIcon.displayName = 'SvgIcon';

export default SvgIcon;
