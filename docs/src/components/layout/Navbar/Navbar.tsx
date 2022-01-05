import React from 'react';
import { Box, createStyles, makeStyles, Paper } from '@material-ui/core';
import { RouteMapEntry } from 'docs/utils/routes';
import PagesList from './PagesList';

const useStyles = makeStyles(({ palette }) =>
    createStyles({
        root: {
            backgroundColor: palette.background.default,
        },
    }),
);

const Navbar = ({ routes }: { routes: RouteMapEntry[] }) => {
    const classes = useStyles();
    return (
        <Paper square classes={{ root: classes.root }}>
            <Box width="280px" height="100%" overflow="auto">
                <PagesList routes={routes} />
            </Box>
        </Paper>
    );
};

export default Navbar;
