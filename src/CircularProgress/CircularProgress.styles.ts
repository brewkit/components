import { createStyles, makeStyles } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        BkCircularProgress: {
            props: {
                layered: boolean;
            };
        };
    }
    interface ThemeOptions {
        BkCircularProgress: {
            props: {
                layered?: boolean;
            };
        };
    }
}

const useStyles = makeStyles({
    root: {
        display: 'inline-block',
        position: 'relative',
        '& > *:first-child': {
            position: 'absolute',
            opacity: 0.25,
        },
    },
});

export default useStyles;
