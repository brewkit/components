import { createStyles, makeStyles } from '@material-ui/core';

export default makeStyles(({ sizes, palette }) =>
    createStyles({
        root: {
            marginLeft: `-${sizes.xsmall}`,
            marginTop: `-${sizes.xsmall}`,
        },

        label: {
            fontSize: sizes.normal,
            fontWeight: 'normal',
            color: palette.secondary.main,
        },
    }),
);
