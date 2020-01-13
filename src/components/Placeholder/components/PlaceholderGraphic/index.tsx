import React, { ReactElement } from 'react';
import Icon from '../../../Icon';
import Typography from '../../../Typography';
import { Props } from './types';
import clsx from 'clsx';


function PlaceholderGraphic({
    className,
    graphic,
}: Props): ReactElement {


    const placeholderClasses = clsx(
        'brew-Placeholder__graphic',
        className,
    );


    return (
        <Typography as="p" className={placeholderClasses} variant="body1">
            <Icon children={graphic} />
        </Typography>
    );


}


export default PlaceholderGraphic;
