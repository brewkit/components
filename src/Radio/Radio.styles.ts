import { createStyles, makeStyles } from '@material-ui/core';

export default makeStyles(({ palette, sizes }) =>
    createStyles({
        root: {
            width: '2rem',
            height: '2rem',
            color: palette.primary.main,
            padding: sizes.small,
            '& div': {
                borderWidth: '2px',
                borderStyle: 'solid',
                borderRadius: '50%',
                borderColor: 'inherit',
                transition: 'all 0.3s',
            },
            '&$checked div': {
                backgroundColor: palette.primary.main,
                borderColor: palette.primary.main,
            },
            '&$disabled div': {
                backgroundColor: palette.primary.main,
                borderColor: palette.primary.main,
                opacity: 0.5,
            },
            '& svg:first-of-type': {
                width: '2rem',
                height: '2rem',
                color: 'transparent',
            },
            '& svg:last-of-type': {
                width: '2rem',
                height: '2rem',
                color: '#fff',
            },
        },

        colorPrimary: {
            '&$checked:not($disabled) div': {
                backgroundColor: palette.primary.main,
                borderColor: palette.primary.main,
            },
        },

        colorSecondary: {
            '&$checked:not($disabled) div': {
                backgroundColor: palette.secondary.main,
                borderColor: palette.secondary.main,
            },
        },
    }),
);
