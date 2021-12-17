import { Theme } from '@material-ui/core/styles/createTheme';
import blueGrey from '@material-ui/core/colors/blueGrey';
import { merge as _merge } from 'lodash';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles<Theme>((theme): any => ({


    controlBase: _merge({
        height: '2rem',
        width: '2rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: '2px',
        borderStyle: 'solid',
        borderRadius: '4px',
        transition: 'all 0.3s',
    }, theme?.BkCheckbox?.controlBase),


    uncheckedControl: _merge({
        borderColor: blueGrey[100],
    }, theme?.BkCheckbox?.uncheckedControl),


    checkedControl: _merge({
        color: '#fff',
        backgroundColor: theme?.palette?.primary?.main,
        borderColor: theme?.palette?.primary?.main,
    }, theme?.BkCheckbox?.checkedControl),


}), { name: 'Checkbox' });


export default useStyles;
