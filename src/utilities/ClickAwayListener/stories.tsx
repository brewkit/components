import React, { ReactElement } from 'react';
import Label from '../../components/Label';
import ClickAwayListener from './index';
import Button from '../../components/Button';


export default {
    component: ClickAwayListener,
    parameters: {
        componentSubtitle: <Label color="success">Stable</Label>,
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
