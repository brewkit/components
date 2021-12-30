import blueGrey from '@material-ui/core/colors/blueGrey';
import merge from 'lodash.merge';
import { createStyles, makeStyles } from '@material-ui/core';

declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        BkCheckbox: {
            controlBase: React.CSSProperties;
            uncheckedControl: React.CSSProperties;
            checkedControl: React.CSSProperties;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        BkCheckbox?: {
            controlBase?: React.CSSProperties;
            uncheckedControl?: React.CSSProperties;
            checkedControl?: React.CSSProperties;
        };
    }
}

export const useMuiStyles = makeStyles(({ palette }) =>
    createStyles({
        root: {
            '&$disabled div, &$disabled div': {
                backgroundColor: palette.primary.main,
                borderColor: palette.primary.main,
            },
        },

        colorSecondary: {
            '&$checked div': {
                backgroundColor: palette.secondary.main,
                borderColor: palette.secondary.main,
            },
        },
    }),
);

export const useStyles = makeStyles(({ palette, BkCheckbox }) =>
    createStyles({
        controlBase: merge(
            {
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
            BkCheckbox.controlBase,
        ),

        uncheckedControl: merge(
            {
                borderColor: blueGrey[100],
            },
            BkCheckbox.uncheckedControl,
        ),

        checkedControl: merge(
            {
                color: '#fff',
                backgroundColor: palette.primary.main,
                borderColor: palette.primary.main,
            },
            BkCheckbox.checkedControl,
        ),
    }),
);
