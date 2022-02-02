import blueGrey from '@material-ui/core/colors/blueGrey';
import { createStyles, makeStyles } from '@material-ui/core';

export const useStyles = makeStyles(({ palette }) =>
    createStyles({
        checked: {
            backgroundColor: palette.primary.main,
            borderColor: palette.primary.main,
        },

        disabled: {
            backgroundColor: palette.primary.main,
            borderColor: palette.primary.main,
        },

        colorSecondary: {
            '&$checked div': {
                backgroundColor: palette.secondary.main,
                borderColor: palette.secondary.main,
            },
        },

        controlBase: {
            height: '2rem',
            width: '2rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderWidth: '2px',
            borderStyle: 'solid',
            borderRadius: '4px',
            transition: 'all 0.3s',
        },

        uncheckedControl: {
            borderColor: blueGrey[100],
        },

        checkedControl: {
            color: '#fff',
            backgroundColor: palette.primary.main,
            borderColor: palette.primary.main,
        },
    }),
);
