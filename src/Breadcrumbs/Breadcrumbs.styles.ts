import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(
    () =>
        createStyles({
            root: {
                '& .MuiTypography-root': {
                    display: 'flex',
                    alignItems: 'center',
                },
                '& a > .MuiSvgIcon-root': {
                    fontSize: 'inherit',
                    marginRight: '0.25rem',
                },
            },
        }),
    { name: 'BkBreadcrumbs' },
);
