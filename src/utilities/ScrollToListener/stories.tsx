import React, { ReactElement } from 'react';
import ScrollToListener from './index';


export default {
    component: ScrollToListener,
    title: 'Utilities|ScrollToListener',
};


export const Default = (): ReactElement => {
    // eslint-disable-next-line no-console
    const fire = (): void => console.log('scrolled to');


    return (
        <div style={{ backgroundColor: 'rebeccapurple', height: '1000px', width: '1000px' }}>
            <ScrollToListener onScrollTo={fire}>
                <div>HELLO WORLD</div>
            </ScrollToListener>
        </div>
    );


};
