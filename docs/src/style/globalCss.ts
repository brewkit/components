import { createStyles, makeStyles, Theme } from '@material-ui/core';

export default makeStyles(({ palette }: Theme) =>
    createStyles({
        '@global': {
            html: {
                backgroundColor: palette.background.default,
            },
        },
    }),
);
