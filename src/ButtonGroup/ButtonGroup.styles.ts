import { createStyles, makeStyles } from '@material-ui/core';

export default makeStyles(({ sizes, palette }) =>
    createStyles({
        groupedContained: {
            padding: `${sizes.normal} ${sizes.large}`,
            minWidth: '150px',
            backgroundColor: palette.background.paper,
        },
        groupedContainedHorizontal: {
            '&:not(:last-child)': {
                borderColor: palette.primary.main,
                borderRight: 0,
            },
        },
        groupedContainedVertical: {
            '&:not(:last-child)': {
                borderWidth: 0,
                borderBottom: 'none',
                marginBottom: '1px',
            },
        },
        groupedContainedPrimary: {
            color: palette.primary.main,
            '&:hover': {
                backgroundColor: palette.primary.main,
                color: palette.common.white,
            },
        },
        groupedContainedSecondary: {
            fontSize: sizes.small,
            padding: `${sizes.small} ${sizes.xsmall}`,
            backgroundColor: palette.background.paper,
            color: palette.secondary.main,
            '&:hover': {
                backgroundColor: palette.secondary.main,
                color: palette.common.white,
            },
        },
    }),
);
