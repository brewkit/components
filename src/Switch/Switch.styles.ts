import { createStyles, makeStyles } from '@material-ui/core';

export default makeStyles(({ palette }) =>
    createStyles({
        root: {
            margin: '9px',
            padding: '0.3rem 0',
            width: 'auto',
            height: 'auto',
            overflow: 'visible',
        },

        switchBase: {
            position: 'absolute',
            top: '50%',
            transform: 'translate(0%, -50%)',
            padding: 0,
            overflow: 'visible',
            '&:not($disabled) $thumb': {
                backgroundColor: palette.primary.main,
            },
            '&$checked': {
                transform: 'translate(2rem, -50%)',
            },
            '&$checked + $track': {
                opacity: 0.2,
            },
        },

        track: {
            opacity: 0.2,
            width: '4rem',
            height: '1.5rem',
            borderRadius: '4px',
            backgroundColor: palette.primary.main,
            transition: 'all 0.3s',
        },

        thumb: {
            width: '2rem',
            height: '2rem',
            borderRadius: '4px',
            overflow: 'visible',
            transition: 'all 0.3s',
        },

        colorPrimary: {
            '&$checked:not($disabled) $thumb': {
                backgroundColor: palette.primary.main,
            },
        },

        colorSecondary: {
            '&$checked:not($disabled) $thumb': {
                backgroundColor: palette.primary.main,
            },
        },
    }),
);
