import { Theme } from '@material-ui/core/styles/createTheme';
import { makeStyles } from '@material-ui/core/styles';

declare module '@material-ui/core/styles/createTheme' {
    interface Theme {
        BkButton: {
            loading: React.CSSProperties;
        };
    }
    // allow configuration using `createTheme`
    interface ThemeOptions {
        BkButton?: {
            loading?: React.CSSProperties;
        };
    }
}

const useStyles = makeStyles<Theme>(
    ({ BkButton, palette, gaps }) => ({
        root: {
            padding: `'1em 1.25em'`,
            fontSize: '1rem',
            minWidth: '150px',
        },

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
    { name: 'Button' },
);

export default useStyles;
