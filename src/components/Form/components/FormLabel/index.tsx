import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';
import styles from './styles.scss';


function FormLabel({
    as = 'label',
    className,
    children,
    ...otherProps
}: Props): ReactElement {


    const classes = clsx(
        styles.formLabel,
        className,
    );

    return (
        <Typography as={as} className={classes} variant="label" {...otherProps}>
            {children}
        </Typography>
    );


}


export default FormLabel;
