import { PaletteType } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';
import { sizes, cervezaPalette } from './defaultTheme';

import { AlertClassKey } from '@material-ui/lab/Alert';
import { AlertTitleClassKey } from '@material-ui/lab/AlertTitle';

declare module '@material-ui/core/styles/overrides' {
    export interface ComponentNameToClassKey {
        MuiAlert: AlertClassKey;
        MuiAlertTitle: AlertTitleClassKey;
    }
}

const componentOverrides = (type: PaletteType): Overrides => ({
    MuiAlertTitle: {
        root: {
            fontSize: sizes.normal,
            marginBottom: 0,
        },
    },
    MuiFormControlLabel: {
        root: {
            marginLeft: '-'.concat(sizes.xsmall),
            marginTop: '-'.concat(sizes.xsmall),
        },
        label: {
            fontSize: sizes.normal,
            fontWeight: 'normal',
            color: cervezaPalette.text.secondary.light,
        },
    },
    MuiFormHelperText: {
        root: {
            fontSize: sizes.small,
            fontWeight: 'normal',
            '&$disabled': {
                color: cervezaPalette.blueGray.main,
                opacity: 1,
            },
        },
        contained: {
            marginTop: sizes.xxsmall,
            marginLeft: '0 !important',
        },
    },
    MuiInputLabel: {
        root: {
            '&$outlined$shrink': {
                color: cervezaPalette.text.secondary,
                position: 'relative',
                transform: 'translate(0, 0) scale(1)',
                padding: '0 0 '.concat(sizes.xsmall),
                fontSize: sizes.small,
                textTransform: 'uppercase',
            },
            '&$outlined$shrink$error': {
                color: cervezaPalette.states.error,
            },
        },
    },
    MuiOutlinedInput: {
        root: {
            transition: 'all 0.3s',
            '& fieldset': {
                transition: 'all 0.3s',
                borderWidth: '1px !important',
            },
            '&$disabled': {
                opacity: 1,
                backgroundColor: cervezaPalette.blueGray.light,
                color: cervezaPalette.background.paper.dark,
            },
            '&$disabled $notchedOutline': {
                borderColor: cervezaPalette.background.paper.dark,
            },
        },
        input: {
            padding: '1rem',
            '& ~ fieldset': {
                top: 0,
            },
            '& ~ fieldset legend': {
                display: 'none',
            },
        },
    },
    MuiSelect: {
        root: {
            '&$select': {
                transition: 'all 0.3s',
            },

            '&$select:focus': {
                background: cervezaPalette.primary,
                color: cervezaPalette.white,
                borderRadius: '4px',
            },

            '&:focus ~ svg': {
                color: cervezaPalette.white,
            },

            '&$select option': {
                color: cervezaPalette.text.secondary,
                padding: sizes.small,
            },

            '& label': {
                transform: 'translate(18px, 18px) scale(1)',
            },
        },

        iconOpen: {
            color: cervezaPalette.white,
        },
    },
});

export default componentOverrides;
