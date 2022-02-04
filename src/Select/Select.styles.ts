import { createStyles, makeStyles } from '@material-ui/core';

export default makeStyles(({ palette, sizes }) =>
    createStyles({
        root: {
            '&$select': {
                transition: 'all 0.3s',
            },
            '&$select:focus': {
                background: palette.primary.main,
                color: palette.common.white,
                borderRadius: '4px',
            },
            '&:focus ~ svg': {
                color: palette.common.white,
            },
            '&$select option': {
                color: palette.background.default,
                padding: sizes.small,
            },
            '& label': {
                transform: 'translate(18px, 18px) scale(1)',
            },
        },
        iconOpen: {
            color: palette.common.white,
        },

        menu: {
            padding: sizes.xsmall,
            backgroundColor: palette.common.white,
            border: `1px solid ${palette.primary.main}`,

            '& ul': {
                padding: 0,
            },
        },

        menuItem: {
            padding: sizes.small,
            transition: 'all 0.3s',
        },

        activeMenuItem: {
            backgroundColor: `${palette.primary.main} !important`,
            color: palette.common.white,
        },
    }),
);
