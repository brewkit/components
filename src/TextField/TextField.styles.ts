import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme, { isPassword: boolean }>(
    ({ palette, sizes }) =>
        createStyles({
            root: {
                '& label': {
                    transform: 'translate(18px, 18px) scale(1)',
                },
            },

            input: ({ isPassword }) => ({
                '&::placeholder': {
                    color: palette.text.primary,
                },
                borderTopRightRadius: isPassword ? '0 !important' : 'inherit',
                borderBottomRightRadius: isPassword
                    ? '0 !important'
                    : 'inherit',
            }),

            searchIcon: {
                display: 'flex',
                marginRight: sizes.normal,
                color: palette.primary.main,
            },

            visibilityIcon: {
                display: 'flex',
                marginLeft: sizes.normal,
                color: palette.primary.main,
                cursor: 'pointer',
            },

            menu: {
                backgroundColor:
                    palette.type === 'dark'
                        ? palette.background.default
                        : palette.common.white,
            },

            menuItem: {
                color:
                    palette.type === 'dark'
                        ? palette.common.white
                        : palette.text.primary,
            },

            activeMenuItem: {},
        }),
    { name: 'BkTextField' },
);
