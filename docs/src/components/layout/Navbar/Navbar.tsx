import React from 'react';
import { Box, createStyles, makeStyles, Paper } from '@material-ui/core';
import PagesList from './PagesList';
import { RouteMapEntry } from 'docs/utils/routes';

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
            <Box width="280px" height="100vh" overflow="auto" padding={4}>
                <PagesList routes={routes} />
            </Box>
        </Paper>
    );
};

export default Navbar;
