import * as React from 'react';
import MUICircularProgess, {
    CircularProgressProps as MUICircularProgressProps,
} from '@material-ui/core/CircularProgress';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './CircularProgress.styles';

export type BkCircularProgress = MUICircularProgressProps & {
    /**
     * adds a background circle
     *
     * @default true
     */
    layered?: boolean;
};

export const CircularProgress = React.forwardRef(
    (
        { layered = true, ...otherProps }: BkCircularProgress,
        ref: React.Ref<any>,
    ): React.ReactElement => {
        const theme = useTheme();
        const classes = useStyles();
        const isLayered = theme?.BkCircularProgress?.props?.layered || layered;

        /**
         * if layered=true, we layer another CircularProgress in the background with a lower opacity
         */
        if (isLayered)
            return (
                <div className={classes.root} ref={ref}>
                    <MUICircularProgess
                        {...otherProps}
                        value={100}
                        variant="determinate"
                    />
                    <MUICircularProgess {...otherProps} ref={ref} />
                </div>
            );

        return <MUICircularProgess {...otherProps} ref={ref} />;
    },
);

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;
