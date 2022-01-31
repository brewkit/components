import React from 'react';
import {
    CircularProgress as MuiCircularProgress,
    CircularProgressProps as MuiCircularProgressProps,
    useTheme,
    CircularProgressClassKey,
} from '@material-ui/core';
import { merge } from 'lodash';
import withoutKeys from 'src/utils/withoutKeys';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import useStyles from './CircularProgress.styles';

type BkCircularProgressCustomClasses = 'layeredWrapper';

export type BkCircularProgressProps = MuiCircularProgressProps & {
    classes?: Partial<
        ClassNameMap<CircularProgressClassKey & BkCircularProgressCustomClasses>
    >;
    /**
     * if layered=true, we layer another CircularProgress in the background with a lower opacity
     */
    layered?: boolean;
};

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

const CircularProgress = React.forwardRef(
    (
        props: BkCircularProgressProps,
        ref: React.Ref<unknown>,
    ): React.ReactElement => {
        const { sizes } = useTheme();
        const {
            classes: userClasses = {},
            layered,
            thickness = 3,
            size = sizes.xxlarge,
            ...otherProps
        } = props;
        const classes = useStyles();
        const mergedClasses = merge(
            withoutKeys(classes, ['layeredWrapper']),
            userClasses,
        );

        const sharedProps = {
            classes: mergedClasses,
            thickness,
            size,
            ...otherProps,
        };

        if (layered)
            return (
                <div className={classes.layeredWrapper} ref={ref}>
                    <MuiCircularProgress
                        {...sharedProps}
                        value={100}
                        variant="determinate"
                    />
                    <MuiCircularProgress {...sharedProps} ref={ref} />
                </div>
            );

        return <MuiCircularProgress {...sharedProps} ref={ref} />;
    },
);

CircularProgress.displayName = 'CircularProgress';

export default CircularProgress;
