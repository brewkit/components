import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';


function BannerInfo({
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const subtextClasses = clsx(
        'brew-Banner__bodyInfo',
        className,
    );


    return (
        <Typography className={subtextClasses} variant="body1" {...otherProps}>{children}</Typography>
    );


}


export default BannerInfo;
