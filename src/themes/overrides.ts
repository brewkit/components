import { PaletteType } from '@material-ui/core';
import { Overrides } from '@material-ui/core/styles/overrides';
import { sizes, DefaultTheme } from './defaultTheme';

import { AlertClassKey } from '@material-ui/lab/Alert';
import { AlertTitleClassKey } from '@material-ui/lab/AlertTitle';

declare module '@material-ui/core/styles/overrides' {
    export interface ComponentNameToClassKey {
        MuiAlert: AlertClassKey;
        MuiAlertTitle: AlertTitleClassKey;
    }
}

const componentOverrides = (
    type: PaletteType,
    theme: DefaultTheme,
): Overrides => ({
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
            color: theme.gray.main,
        },
    },
    MuiFormHelperText: {
        root: {
            fontSize: sizes.small,
            fontWeight: 'normal',
            '&$disabled': {
                color: theme.blueGray.main,
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
                color: theme.gray.main,
                position: 'relative',
                transform: 'translate(0, 0) scale(1)',
                padding: '0 0 '.concat(sizes.xsmall),
                fontSize: sizes.small,
                textTransform: 'uppercase',
            },
            '&$outlined$shrink$error': {
                color: theme.states.error,
            },
        },
    },
    MuiOutlinedInput: {
        root: {
            '& input': {
                color: theme.blueGray.light,
            },
            '& $notchedOutline': {
                borderColor: theme.blueGray.main,
            },
            '&:hover $notchedOutline': {
                borderColor: theme.background.paper.light,
            },
            transition: 'all 0.3s',
            '& fieldset': {
                transition: 'all 0.3s',
                borderWidth: '1px !important',
            },
            '&$disabled': {
                opacity: 1,
                backgroundColor:
                    type === 'light'
                        ? theme.blueGray.light
                        : theme.text.secondary.light,
                color: theme.background.paper.dark,

                '& input': {
                    color: theme.blueGray.light,
                },
            },
            '&$disabled $notchedOutline': {
                borderColor:
                    type === 'light'
                        ? theme.blueGray.light
                        : theme.text.secondary.light,
            },
        },
        input: {
            '&:-webkit-autofill': {
                WebkitBoxShadow: 'none',
                WebkitTextFillColor: 'none',
            },
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
                background: theme.primary,
                color: theme.white,
                borderRadius: '4px',
            },

            '&:focus ~ svg': {
                color: theme.white,
            },

            '&$select option': {
                color: theme.text.secondary,
                padding: sizes.small,
            },

            '& label': {
                transform: 'translate(18px, 18px) scale(1)',
            },
        },

        iconOpen: {
            color: theme.white,
        },
    },
});

export default componentOverrides;
