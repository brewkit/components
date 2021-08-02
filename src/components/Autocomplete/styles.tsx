import { makeStyles } from '@material-ui/core';
import { Theme } from '@material-ui/core/styles/createMuiTheme';

const useStyles = makeStyles((theme: Theme) => ({
    root: {

    },
    listbox: {
        backgroundColor: theme?.palette.primary.main,
    },
}));


export default useStyles;
