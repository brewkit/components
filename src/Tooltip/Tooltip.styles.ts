import { createStyles, makeStyles } from '@material-ui/core';

export default makeStyles(({ sizes, palette }) =>
    createStyles({
        tooltip: {
            padding: sizes.small,
            fontSize: sizes.small,
            backgroundColor: palette.info.main,
            color: palette.common.white,
            minWidth: '150px',
            maxWidth: '240px',
            borderRadius: sizes.xxsmall,
            boxShadow:
                '0 2px 4px -1px rgba(0,0,0,0.2), 0 4px 5px 0 rgba(0,0,0,0.14), 0 1px 10px 0 rgba(0,0,0,0.12)',
        },

        arrow: {
            color: palette.info.main,
        },
    }),
);
