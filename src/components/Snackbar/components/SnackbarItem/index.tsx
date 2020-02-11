import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Icon from '../../../Icon';
import { Props } from './types';


function SnackbarItem({
    className,
    itemConfig,
    ...otherProps
}: Props): ReactElement {


    const snackbarClasses = clsx(
        'brew-Snackbar__item',
        `brew-Snackbar__item--${itemConfig.color}`,
        `brew-Snackbar__item--${itemConfig.position}`,
        className,
    );


    return (
        <div className={snackbarClasses} {...otherProps}>
            {itemConfig.iconName && <Icon>{itemConfig.iconName}</Icon>}
            {itemConfig.content}
        </div>
    );


}

export default SnackbarItem;
