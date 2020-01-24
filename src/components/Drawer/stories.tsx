import React, { ReactElement } from 'react';
import { button, select } from '@storybook/addon-knobs';
import Drawer from './index';


export default {
    Component: Drawer,
    title: 'Components|Display/Drawer',
};


export const Default = (): ReactElement => {
    const anchorFrom = select('anchorFrom', ['top', 'right', 'bottom', 'left'], 'left');
    const [isOpen, setIsOpen] = React.useState(true);
    const handler = (): void => setIsOpen(!isOpen);
    button('Toggler', handler);

    return (
        <Drawer anchorFrom={anchorFrom} isOpen={isOpen} onCloseDrawer={handler}>
            <div>
                <div>Example Title</div>
                <div>Example SubTitle</div>
            </div>
            <div>item</div>
            <Drawer.Item>Example Drawer.Item</Drawer.Item>
        </Drawer>
    );
};
