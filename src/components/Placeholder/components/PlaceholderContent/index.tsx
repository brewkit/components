import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';


function PlaceholderContent({
    className,
    children,
}: Props): ReactElement {


    const placeholderClasses = clsx(
        'brew-Placeholder__content',
        className,
    );


    return (
        <Typography className={placeholderClasses} as="p" hasBottomMargin variant="body1">
            {children}
        </Typography>
    );


}


export default PlaceholderContent;
