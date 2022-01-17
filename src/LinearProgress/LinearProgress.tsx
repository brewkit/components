import * as React from 'react';
import MuiLinearProgress, {
    LinearProgressProps as MUILinearProgress,
} from '@material-ui/core/LinearProgress';

export type BkLinearProgressProps = MUILinearProgress;

export const LinearProgress = React.forwardRef(
    (
        { ...otherProps }: BkLinearProgressProps,
        ref: React.Ref<HTMLElement | unknown>,
    ): React.ReactElement => <MuiLinearProgress {...otherProps} ref={ref} />,
);

LinearProgress.displayName = 'BkLinearProgress';

export default LinearProgress;
