import React from 'react';
import { button, select } from '@storybook/addon-knobs';
import Snackbar from './index';


export default {
    title: 'Development|Snackbar',
};

export const General = (): React.ReactElement => {


    const [open, setOpen] = React.useState(false);


    const position = select(
        'position',
        ['top-right', 'top-center', 'top-left', 'bottom-right', 'bottom-center', 'bottom-left'],
        'top-right',
    );

    button('toggle', () => setOpen((prev: any) => !prev));

    return (
        <div>
            <h1>Lorem Ipsum</h1>
            <Snackbar
                action="done"
                color="primary"
                message="not done"
                open={open}
                position={position}
            />
        </div>
    );
};
