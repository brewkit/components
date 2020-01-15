import React, { ReactElement } from 'react';
import { boolean, select } from '@storybook/addon-knobs';
import Button from '../Button';
import Drawer from './index';


export default {
    Component: Drawer,
    title: 'Components|Display/Drawer',
};


export const controlled = (): ReactElement => {
    const anchorFrom = select('anchorFrom', ['top', 'right', 'bottom', 'left'], 'left');
    const [isOpen, setIsOpen] = React.useState(true);
    const toggleDrawer = (): void => setIsOpen(!isOpen);

    return (
        <React.Fragment>
            <Drawer anchorFrom={anchorFrom} isOpen={isOpen} onCloseDrawer={toggleDrawer}>
                <div>
                    <div>Example Title</div>
                    <div>Example SubTitle</div>
                </div>
                <div>item</div>
                <Drawer.Item>Drawer Item</Drawer.Item>
            </Drawer>
            <Button onClick={toggleDrawer}>Toggle</Button>
        </React.Fragment>
    );
};


export const notControlled = (): ReactElement => {
    const anchorFrom = select('anchorFrom', ['top', 'right', 'bottom', 'left'], 'left');
    const [isDefaultOpen, setIsDefaultOpen] = React.useState(true);


    return (
        <React.Fragment>
            <Drawer anchorFrom={anchorFrom} isDefaultOpen={isDefaultOpen}>
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
        </React.Fragment>
    );
};
