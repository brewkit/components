import { createStyles, makeStyles } from '@material-ui/core';

export default makeStyles(({ palette, sizes }) =>
    createStyles({
        root: {
            borderRadius: 0,
            padding: sizes.normal,
            alignItems: 'center',
        },

        message: {
            padding: sizes.xsmall,
            fontSize: sizes.small,
        },

        icon: {
            padding: 0,
            fontSize: sizes.xxlarge,
        },

        action: {
            marginRight: 0,
        },

        /**
         * variant=standard styles
         */
        standardInfo: {
            borderLeft: `${sizes.xsmall} solid ${palette.info.main}`,
            '& $message > *:first-child': {
                color: palette.info.main,
            },
        },

        standardSuccess: {
            borderLeft: `${sizes.xsmall} solid ${palette.success.main}`,
            '& $message > *:first-child': {
                color: palette.success.main,
            },
        },

        standardWarning: {
            borderLeft: `${sizes.xsmall} solid ${palette.warning.main}`,
            '& $message > *:first-child': {
                color: palette.warning.main,
            },
        },

        standardError: {
            borderLeft: `${sizes.xsmall} solid ${palette.error.main}`,
            '& $message > *:first-child': {
                color: palette.error.main,
            },
        },

        /**
         * variant=filled styles
         */
        filledInfo: {
            borderLeft: `${sizes.xsmall} solid ${palette.info.main}`,
            backgroundColor: palette.background.paper,
            '& $message': {
                color: palette.common.white,
            },
            '& $icon, & $message > *:first-child': {
                color: palette.info.main,
            },
        },

        filledSuccess: {
            borderLeft: `${sizes.xsmall} solid ${palette.success.main}`,
            backgroundColor: palette.background.paper,
            '& $message': {
                color: palette.common.white,
            },
            '& $icon, & $message > *:first-child': {
                color: palette.success.main,
            },
        },

        filledWarning: {
            borderLeft: `${sizes.xsmall} solid ${palette.warning.main}`,
            backgroundColor: palette.background.paper,
            '& $message': {
                color: palette.common.white,
            },
            '& $icon, & $message > *:first-child': {
                color: palette.warning.main,
            },
        },

        filledError: {
            borderLeft: `${sizes.xsmall} solid ${palette.error.main}`,
            backgroundColor: palette.background.paper,
            '& $message': {
                color: palette.common.white,
            },
            '& $icon, & $message > *:first-child': {
                color: palette.error.main,
            },
        },
    }),
);
