import { createTheme } from '@material-ui/core/styles';
import { merge } from 'lodash';
import baseTheme from './base';

const cervezaLight = {
    palette: {
        type: 'light',
        text: {
            primary: '#607D8B',
            secondary: '#607D8B',
        },
        background: {
            default: '#fff',
            paper: '#ECEFF1',
        },
    },
};

export default createTheme(merge(baseTheme, cervezaLight));
