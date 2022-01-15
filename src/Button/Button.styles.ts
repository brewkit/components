import { createStyles, makeStyles } from '@material-ui/core/styles';
import Color from 'color';

export const useStyles = makeStyles(({ sizes, palette }) =>
    createStyles({
        root: {
            fontSize: sizes.normal,
            padding: `${sizes.normal} ${sizes.large}`,
            minWidth: '150px',
        },

        contained: {
            borderWidth: '2px',
            borderStyle: 'solid',
            borderColor: 'transparent',
        },

        containedPrimary: {
            borderColor: palette.primary.main,
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
            padding: `${sizes.small} ${sizes.normal}`,
            minWidth: 0,
        },

        content: {
            position: 'relative',
            top: 0,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: sizes.normal,
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
            left: '50%',
            transform: 'translate(-50%, -50%)',
            transition: 'all 0.3s',

            '& .MuiCircularProgress-root:first-child': {
                marginTop: 3,
            },
        },

        loading: {
            opacity: 0.5,

            '& $content': {
                opacity: 0,
            },

            '& $loader': {
                top: 'calc(50% + 3px)',
                opacity: 1,
            },
        },
    }),
);

export default useStyles;
