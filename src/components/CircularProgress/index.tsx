import * as React from 'react';
import MuiCircularProgress from '@material-ui/core/CircularProgress';
import useStyles from './styles';
import { Props } from './types';


/**
 * Progress indicators commonly known as spinners, express an unspecified wait time or display the length of a process. The animation works with CSS, not JavaScript.
 *
 * [Material-UI Docs](https://material-ui.com/components/progress/)
 *
 * ## Differences in Brewkit:
 *
 * - Adds a `layered` property that can be used to render an always visible circular background
 */
export const CircularProgress = React.forwardRef(({
    layered,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = useStyles();


    if (layered) return (
        <div className={classes.root} ref={ref}>
            <MuiCircularProgress {...otherProps} value={100} variant="static" />
            <MuiCircularProgress {...otherProps} ref={ref} />
        </div>
    );


    return (
        <MuiCircularProgress {...otherProps} ref={ref} />
    );


});


CircularProgress.displayName = 'CircularProgress';


export default CircularProgress;
