import React, { ReactElement } from 'react';
import Flag from '@components/Flag';
import Button from '@components/Button';
import ClickAwayListener from './index';


export default {
    component: ClickAwayListener,
    parameters: {
        componentSubtitle: <Flag color="success">Stable</Flag>,
    },
    title: 'Utilities|ClickAwayListener',
};


export const General = (): ReactElement => {


    const [isLoading, setLoading] = React.useState(false);


    return (
        <ClickAwayListener onClickAway={(): void => setLoading(!isLoading)}>
            <Button isLoading={isLoading}>Click away from me!</Button>
        </ClickAwayListener>
    );


};


export const MultipleChildren = (): ReactElement => (
    // eslint-disable-next-line no-alert
    <ClickAwayListener onClickAway={(): void => alert('clicked away!')}>
        <React.Fragment>
            <Button>Click away from me!</Button>
            <Button>Click away from me!</Button>
        </React.Fragment>
    </ClickAwayListener>
);
