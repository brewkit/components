import { makeStyles } from '@material-ui/core/styles';
import { Theme } from '@material-ui/core/styles/createTheme';


const useStyles = makeStyles<Theme>((theme): any => ({
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
}), { name: 'Breadcrumbs' });


export default useStyles;
