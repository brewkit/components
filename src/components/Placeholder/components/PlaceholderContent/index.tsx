import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';


function PlaceholderContent({
    className,
    children,
}: Props): ReactElement {


    const placeholderClasses = clsx(
        'brew-Placeholder--content',
        className,
    );


    return (
        <div className={placeholderClasses}>
            {children &&
                <Typography as="p" hasBottomMargin variant="body1">
                    {children}
                </Typography>
            }
        </div>
    );


}


export default PlaceholderContent;
