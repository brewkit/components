import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../../../InputBase';
import { Props } from './types';
import styles from './styles.scss';


function Radio({
    className,
    customControl,
    disabled = false,
    fullWidth = false,
    inputLabel,
    checked,
    onChange,
    ...otherProps
}: Props): ReactElement {


    const defaultCustomControl = (): ReactElement => <div className={styles.radio} />;


    const classes = clsx(
        styles.wrapper,
        { [styles.isDisabled]: Boolean(disabled) },
        { [styles.isFullWidth]: Boolean(fullWidth) },
        className,
    );


    function handleOnChange() {
        checked = !checked;
    }


    return (
        <InputBase
            className={classes}
            inputLabel={inputLabel}
            customControl={customControl || defaultCustomControl}
            disabled={disabled}
            fullWidth={fullWidth}
            type="radio"
            onChange={handleOnChange}
            {...otherProps}
        />
    );

}


export default Radio;
