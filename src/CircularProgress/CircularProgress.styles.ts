import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(
    () =>
        createStyles({
            layeredWrapper: {
                display: 'inline-block',
                position: 'relative',
                '& > *:first-child': {
                    position: 'absolute',
                    opacity: 0.25,
                },
            },
        }),
    { name: 'BkCircularProgress' },
);
