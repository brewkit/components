import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles(
    ({ palette }) =>
        createStyles({
        root: {
            '& label': {
                transform: 'translate(18px, 18px) scale(1)',
            },
        },

        searchIcon: {
            display: 'flex',
            marginRight: '0.5rem',
            color: palette.primary.main,
        },

        visibilityIcon: {
            display: 'flex',
            marginLeft: '0.5rem',
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
    { name: 'TextField' },
);
