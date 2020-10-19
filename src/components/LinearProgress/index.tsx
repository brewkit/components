import * as React from 'react';
import MuiLinearProgress from '@material-ui/core/LinearProgress';
import { Props } from './types';


/**
 * Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process. The animation works with CSS, not JavaScript.
 *
 * [Material-UI Docs](https://material-ui.com/components/progress/)
 *
 * > No differences in Brewkit.
 */
export const LinearProgress = React.forwardRef(({
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => (


    <MuiLinearProgress {...otherProps} ref={ref} />


));


LinearProgress.displayName = 'LinearProgress';


export default LinearProgress;
