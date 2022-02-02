import blueGrey from '@material-ui/core/colors/blueGrey';
import { createStyles, makeStyles } from '@material-ui/core';

export default makeStyles(
    ({ palette }) =>
        createStyles({
            layeredWrapper: {
                display: 'inline-block',
                position: 'relative',
                '& > *:first-child': {
                    position: 'absolute',
                    opacity: 0.25,
                },
            }
        }),
    { name: 'BkCheckbox' },
);