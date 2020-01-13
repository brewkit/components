import React, { ReactElement } from 'react';
import { select } from '@storybook/addon-knobs';
import NavItem from '../NavItem';
import Drawer from './index';
import DrawerContext from "./context";


export default {
    Component: Drawer,
    title: 'Components|Display/Drawer',
};


export const general = (): ReactElement => {
    const anchorFrom = select('anchorFrom', ['top', 'right', 'bottom', 'left'], 'left');


    return (
        <Drawer anchorFrom={anchorFrom}>
            <div>
                <div>Example Title</div>
                <div>Example SubTitle</div>
            </div>
            <NavItem>
                This is a NavItem that will close the drawer when clicked
            </NavItem>
        </Drawer>
    );
};
