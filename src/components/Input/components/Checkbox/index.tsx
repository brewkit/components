import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Icon from '@components/Icon';
import InputBase from '../InputBase';
import { Props } from './types';


function Checkbox({
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        'brew-Checkbox',
        className,
    );


    return (
        <InputBase
            className={classes}
            customControl={(
                <div className="brew-Checkbox__control">
                    <Icon className="brew-Checkbox__controlIcon">check</Icon>
                </div>
            )}
            label={children}
            type="checkbox"
            {...otherProps}
        />
    );


}


export default Checkbox;
