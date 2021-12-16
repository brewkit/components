import { NextPage } from 'next';
import React from 'react';
import { Box, Paper } from '@material-ui/core';
import { UserThemeContext } from '@docs/style';
import { Button } from '@brewkit/components';

const Home: NextPage = () => {
    const userCtx = React.useContext(UserThemeContext);

    return (
        <React.Fragment>
            <Box marginBottom={4}>
                <Button onClick={userCtx?.onUpdate}>Change theme</Button>
            </Box>
            <Paper elevation={4}>
                <Box padding={3}>Some data here</Box>
            </Paper>
        </React.Fragment>
    );
};

export default Home;
