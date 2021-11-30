import { makeStyles } from '@material-ui/core/styles';
import { size } from '../../../themes/cerveza/variables';


const useStyles = makeStyles({
    root: {
        '& .MuiTypography-root': {
            display: 'flex',
            alignItems: 'center',
        },
        '& a > .MuiSvgIcon-root': {
            fontSize: 'inherit',
            marginRight: size.xxsmall,
        },
    },
}, { name: 'Breadcrumbs' });


export default useStyles;
