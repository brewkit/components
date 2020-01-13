import React, { ReactElement } from 'react';
import { select } from '@storybook/addon-knobs';
import { DrawerProvider } from './context';
import Drawer from './index';


export default {
    Component: Drawer,
    title: 'Components|Display/Drawer',
};


export const general = (): ReactElement => {
    const anchorFrom = select('anchorFrom', ['top', 'right', 'bottom', 'left'], 'left');


    return (
        <DrawerProvider>
            <Drawer anchorFrom={anchorFrom}>
                hi
            </Drawer>
        </DrawerProvider>
    );
};
