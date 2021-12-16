import { createTheme } from '@material-ui/core/styles';
import { merge } from 'lodash';
import baseTheme from './base';

const cervezaDark = {
    palette: {
        type: 'dark',
        text: {
            primary: '#fff',
            secondary: '#90A4AE',
        },
        background: {
            default: '#002130',
            paper: '#37474f',
        },
    },
};

export default createTheme(merge(baseTheme, cervezaDark));
