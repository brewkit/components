import { Theme } from '@material-ui/core/styles/createTheme';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Color from 'color';

declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        BkButton: {
            loading: React.CSSProperties;
        };
    }
    interface ThemeOptions {
        BkButton?: {
            loading?: React.CSSProperties;
        };
    }
}

export const useMuiStyles = makeStyles(({ sizes, palette }) =>
    createStyles({
        root: {
            padding: `${sizes.normal} ${sizes.large}`,
            fontSize: sizes.normal,
            minWidth: '150px',
        },

        contained: {
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'transparent',
        },

        containedPrimary: {
            backgroundColor: palette.primary.main,
            color: palette.common.white,

            '&:disabled': {
                background: 'transparent',
                opacity: 0.5,
                color: palette.primary.main,
                borderColor: palette.primary.main,
            },

            '&:hover': {
                backgroundColor: Color(palette.primary.main).darken(0.1).hex(),
            },
        },

        containedSecondary: {
            color: palette.common.white,
            borderColor: palette.secondary.main,

            '&:disabled': {
                background: 'transparent',
                opacity: 0.5,
                color: palette.secondary.main,
                borderColor: palette.secondary.main,
            },
            '&:hover': {
                backgroundColor: Color(palette.secondary.main).darken(1).hex(),
            },
        },

        sizeSmall: {
            fontSize: sizes.small,
            padding: `${sizes.xsmall} ${sizes.small}`,
            minWidth: 0,
        },
    }),
);

const useStyles = makeStyles(
    ({ BkButton }) =>
        createStyles({
            content: {
                position: 'relative',
                top: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '1em',
                opacity: 1,
                transition: 'all 0.3s',

                '& > *:not(:last-child)': {
                    marginRight: '0.5rem',
                },
            },

            loader: {
                pointerEvents: 'none',
                opacity: 0,
                position: 'absolute',
                top: 'calc(50% + 1rem)',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                transition: 'all 0.3s',
            },

            loading: {
                opacity: BkButton?.loading?.opacity ?? 0.5,

                '& $content': {
                    top: '-1rem',
                    opacity: 0,
                },

                '& $loader': {
                    top: 'calc(50% + 2px)',
                    opacity: 1,
                },
            },
        }),
    { name: 'BkButton' },
);

export default useStyles;
