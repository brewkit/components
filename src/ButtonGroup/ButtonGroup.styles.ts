import { createStyles, makeStyles } from '@material-ui/core';

export default makeStyles(({ sizes, palette }) =>
    createStyles({
        groupedContained: {
            fontSize: sizes.small,
            padding: `${sizes.small} ${sizes.xsmall}`,
            backgroundColor: palette.background.paper,
        },
    }),
);
