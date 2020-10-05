import { Theme } from '@material-ui/core/styles/createMuiTheme';
import { merge as _merge } from 'lodash';


const styles = (theme: Theme): any => ({


    searchIcon: _merge({
        display: 'flex',
        marginRight: '0.5rem',
        color: theme?.palette?.primary?.main,
    }, theme?.BkTextField?.searchIcon),


    visibilityIcon: _merge({
        display: 'flex',
        marginLeft: '0.5rem',
        color: theme?.palette?.primary?.main,
        cursor: 'pointer',
    }, theme?.BkTextField?.visibilityIcon),


    menu: _merge({}, theme?.BkTextField?.menu),

    menuItem: _merge({}, theme?.BkTextField?.menuItem),

    activeMenuItem: _merge({}, theme?.BkTextField?.activeMenuItem),


});


export default styles;
