import * as React from 'react';
import MuiLinearProgress, {
    LinearProgressProps as MUILinearProgress,
} from '@material-ui/core/LinearProgress';

export type BkLinearProgress = MUILinearProgress;

export const LinearProgress = React.forwardRef(
    (
        { ...otherProps }: BkLinearProgress,
        ref: React.Ref<HTMLElement>,
    ): React.ReactElement => <MuiLinearProgress {...otherProps} ref={ref} />,
);

LinearProgress.displayName = 'BkLinearProgress';

export default LinearProgress;
