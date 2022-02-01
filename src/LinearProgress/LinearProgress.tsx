import * as React from 'react';
import {
    LinearProgress as MuiLinearProgress,
    LinearProgressProps as MuiLinearProgressProps,
} from '@material-ui/core';

export type BkLinearProgressProps = MuiLinearProgressProps;

/**
 * Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process. The animation works with CSS, not JavaScript.
 *
 * [Material-UI Docs](https://material-ui.com/components/progress/)
 *
 * > No differences in Brewkit.
 */

const LinearProgress = React.forwardRef(
    (
        { ...otherProps }: BkLinearProgressProps,
        ref: React.Ref<HTMLDivElement | unknown>,
    ): React.ReactElement => <MuiLinearProgress {...otherProps} ref={ref} />,
);

LinearProgress.displayName = 'LinearProgress';

export default LinearProgress;
