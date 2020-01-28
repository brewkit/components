import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Icon from '@components/Icon';
import InputBase from '../InputBase';
import { Props } from './types';


function CheckboxCustomControl(): ReactElement {
    return (
        <div className="brew-Input__customControl">
            <Icon className="brew-Input__customControlIcon" size="large">check</Icon>
        </div>
    );
}


function Checkbox({
    className,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-Input--checkbox',
        className,
    );


    return (
        <InputBase
            className={classes}
            customControl={<CheckboxCustomControl />}
            type="checkbox"
            {...otherProps}
        />
    );


}


export default Checkbox;
