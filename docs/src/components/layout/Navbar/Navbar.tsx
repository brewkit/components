import React from 'react';
import { Box, Paper } from '@material-ui/core';
import PagesList from './PagesList';
import { RouteMapEntry } from 'docs/utils/routes';

const Navbar = ({ routes }: { routes: RouteMapEntry[] }) => {
    return (
        <Paper style={{ backgroundColor: 'white' }}>
            <Box width="280px" height="100vh" overflow="auto" padding={4}>
                <PagesList routes={routes} />
            </Box>
        </Paper>
    );
};

export default Navbar;
