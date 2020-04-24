import React from 'react';
import { select } from '@storybook/addon-knobs';
import Flag from '@components/Flag';
import Icon from '@components/Icon';
import AppBar from '@components/AppBar';
import Typography from '@components/Typography';


export default {
    component: AppBar,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Stable|Data Display/AppBar',
};


export const Sandbox = (): React.ReactElement => (


        <AppBar>
            <div style={{ display: 'grid', gridGap: '1rem' }}>
                <Icon color="primary" size="large">add_circle</Icon>
                <Icon color="primary" size="large">contacts</Icon>
                <Icon color="primary" size="large">business</Icon>
            </div>
            <div style={{ display: 'grid', gridGap: '1rem' }}>
                <Icon color="primary" size="large">add</Icon>
                <Icon color="primary" size="large">more_vert</Icon>
            </div>
        </AppBar>


);


export const Sticky = (): React.ReactElement => (


        <div>
            <AppBar anchorFrom="top" position="sticky">
                <Icon color="primary" size="large">menu</Icon>
                <Typography style={{ marginLeft: '1rem' }} variant="h3" color="primary">OvrC 2.0</Typography>
                <div>
                    <Icon color="primary" size="large">add</Icon>
                    <Icon color="primary" size="large">more_vert</Icon>
                </div>
            </AppBar>
            <div style={{ height: '5rem', overflow: 'scroll' }}>
                <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    It has survived not only five centuries, but also the leap into electronic typesetting,
                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                    Aldus PageMaker including versions of Lorem Ipsum.
                </Typography>
            </div>
        </div>


    );
