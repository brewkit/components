import React, { ReactElement } from 'react';
import Typography from '../../../Typography';
import { Props } from './types';


function PlaceholderTitle({
    className,
    title,
}: Props): ReactElement {


    return (
        <div className={className}>
            {title &&
                <Typography hasBottomMargin shouldTruncate variant="h1" color="tertiary">
                    {title}
                </Typography>
            }
        </div>
    );


}


export default PlaceholderTitle;
