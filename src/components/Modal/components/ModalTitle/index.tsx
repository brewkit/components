import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';


function ModalTitle(props: Props): ReactElement {
    const { className, ...otherProps } = props;
    const classes = clsx(
        'brew-Modal__title',
        className,
    );

    return (
        <Typography className={classes} {...otherProps} />
    );
}

export default ModalTitle;
