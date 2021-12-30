import { createStyles, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
    (theme) =>
        createStyles({
            primary: { color: theme.palette.primary.main },
            secondary: { color: theme.palette.secondary.main },
            success: { color: theme.palette.success.main },
            error: { color: theme.palette.error.main },
            warning: { color: theme.palette.warning.main },
            text: { color: theme.palette.text.primary },
        }),
    { name: 'Typography' },
);

export default useStyles;
