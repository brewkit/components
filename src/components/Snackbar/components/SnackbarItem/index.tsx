import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Button from '../../../Button';
import Icon from '../../../Icon';
import { SnackbarContext } from '../../context';
import { Props } from './types';


function SnackbarItem({
    className,
    itemConfig,
    ...otherProps
}: Props): ReactElement {


    const snackbar = React.useContext(SnackbarContext);


    const snackbarClasses = clsx(
        'brew-SnackbarItem',
        `brew-SnackbarItem--${itemConfig.color}`,
        `brew-SnackbarItem--${itemConfig.position}`,
        className,
    );


    function closeSnackbar(id?: number): void {
        if (snackbar?.close) snackbar.close(id);
    }


    return (
        <div className={snackbarClasses} {...otherProps}>
            {itemConfig.iconName && (
                <Icon className="brew-SnackbarItem__icon">
                    {itemConfig.iconName}
                </Icon>
            )}
            <div className="brew-SnackbarItem__content">
                {itemConfig.content}
            </div>
            {itemConfig.buttonContent && (
                <div className="brew-SnackbarItem__button">
                    <button onClick={itemConfig.handleAction} type="button">{itemConfig.buttonContent}</button>
                </div>
            )}
            {itemConfig.isCloseable && (
                <span className="brew-SnackbarItem__close" onClick={(): void => closeSnackbar(itemConfig.id)}>
                    &times;
                </span>
            )}
        </div>
    );


}

export default SnackbarItem;
