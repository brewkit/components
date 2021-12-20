import * as React from 'react';
import MuiCircularProgress from '@material-ui/core/CircularProgress';
import { useTheme } from '@material-ui/core/styles';
import useStyles from './CircularProgess.styles';
import { Props } from './CircularProgress.types';

/**
 * Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process.
 * The animation works with CSS, not JavaScript.
 *
 * [Material-UI Docs](https://material-ui.com/components/progress/)
 *
 * ## Differences in Brewkit:
 *
 * - Adds a `layered` property that can be used to render an always visible circular background. The default value of
 * this prop can be set using `BkCircularProgress.props.layered` in your theme.
 */

export const CircularProgress = React.forwardRef(
    (
        { layered, ...otherProps }: Props,
        ref: React.Ref<any>,
    ): React.ReactElement => {
        const theme = useTheme();
        const classes = useStyles();
        const isLayered = theme?.BkCircularProgress?.props?.layered || layered;

        /**
         * if layered=true, we layer another CircularProgress in the background with a lower opacity
         */

        if (isLayered) return (
            <div className={classes.root} ref={ref}>
                <MuiCircularProgress
                    {...otherProps}
                    value={100}
                    variant="determinate"
                />
                <MuiCircularProgress {...otherProps} ref={ref} />
            </div>
        );

        return <MuiCircularProgress {...otherProps} ref={ref} />;
    },
);

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;
