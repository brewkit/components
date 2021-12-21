import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useGlobalCss = makeStyles(({ palette }: Theme) => {
    return createStyles({
        '@global': {
            body: {
                height: '100vh',
                backgroundColor: palette.background.paper,
            },
        },
    });
});

export default useGlobalCss;
