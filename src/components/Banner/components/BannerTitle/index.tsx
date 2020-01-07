import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';


function BannerTitle({
    children,
    className,
    ...otherProps
}: Props): ReactElement {


    const headerClasses = clsx(
        'brew-Banner__bodyTitle',
        className,
    );


    return (
        <Typography className={headerClasses} variant="h3" {...otherProps}>{children}</Typography>
    );


}


export default BannerTitle;
