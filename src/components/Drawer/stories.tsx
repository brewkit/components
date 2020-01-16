import React, { ReactElement } from 'react';
import { button, select } from '@storybook/addon-knobs';
import Drawer from './index';


export default {
    Component: Drawer,
    title: 'Components|Display/Drawer',
};


export const controlled = (): ReactElement => {
    const anchorFrom = select('anchorFrom', ['top', 'right', 'bottom', 'left'], 'left');
    const [isOpen, setIsOpen] = React.useState(true);
    const label = 'Toggler';
    const handler = (): void => setIsOpen(!isOpen);
    button(label, handler);


    return (
        <Drawer anchorFrom={anchorFrom} isOpen={isOpen} onCloseDrawer={handler}>
            <div>
                <div>Example Title</div>
                <div>Example SubTitle</div>
            </div>
            <div>item</div>
            <Drawer.Item>Drawer Item</Drawer.Item>
        </Drawer>
    );
};


export const notControlled = (): ReactElement => {
    const anchorFrom = select('anchorFrom', ['top', 'right', 'bottom', 'left'], 'left');


    return (
        <Drawer anchorFrom={anchorFrom} isDefaultOpen>
            <div>
                <div>Example Title</div>
                <div>Example SubTitle</div>
            </div>
            <div style={{ display: 'grid', gridAutoFlow: 'column' }}>
                <Drawer.Item>Clickable</Drawer.Item>
                <div>
                    Not Clickable
                </div>
            </div>
        </Drawer>
    );
};
