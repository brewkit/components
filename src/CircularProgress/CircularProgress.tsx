import * as React from 'react';
import MUICircularProgess, {
    CircularProgressProps as MUICircularProgressProps,
} from '@material-ui/core/CircularProgress';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './CircularProgress.styles';
import { merge } from 'lodash';

export type BkCircularProgressProps = MUICircularProgressProps & {
    /**
     * adds a background circle
     *
     * @default true
     */
    layered?: boolean;
};

export const CircularProgress = React.forwardRef(
    (
        props: BkCircularProgressProps,
        ref: React.Ref<HTMLDivElement>,
    ): React.ReactElement => {
        const { sizes } = useTheme();
        const {
            classes: userClasses,
            thickness = 3,
            size = sizes.xxlarge,
            layered = true,
            ...otherProps
        } = props;
        const classes = merge(useStyles(), userClasses);
        const sharedProps = {
            thickness,
            size,
            ...otherProps,
        };

        /**
         * if layered=true, we layer another CircularProgress in the background with a lower opacity
         */
        if (layered)
            return (
                <div className={classes.root}>
                    <MUICircularProgess
                        {...sharedProps}
                        value={100}
                        variant="determinate"
                    />
                    <MUICircularProgess {...sharedProps} ref={ref} />
                </div>
            );

        return <MUICircularProgess {...sharedProps} ref={ref} />;
    },
);

CircularProgress.displayName = 'BkCircularProgress';

export default CircularProgress;
