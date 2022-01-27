import { createStyles, makeStyles } from '@material-ui/core';

export default makeStyles(({ palette }) =>
    createStyles({
        badge: {
            borderRadius: '50%',
        },

        colorPrimary: {
            color: palette.common.white,
        },

        colorSecondary: {
            color: palette.common.white,
        },

        colorError: {
            color: palette.common.white,
        },
    }),
);
