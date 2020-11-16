import { createStyles, Theme } from '@material-ui/core/styles';

const styles = (theme: Theme) => createStyles({
    icon: {
        marginBottom: '1rem',
        fontSize: '3rem',
        display: 'flex',
    },
    success: {
        color: theme.palette.success.main,
    },
    info: {
        color: theme.palette.info.main,
    },
    warning: {
        color: theme.palette.warning.main,
    },
    error: {
        color: theme.palette.error.main,
    },
    title: {
        marginBottom: '1rem',
    },
});

export default styles;
