import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';


const CompactStatusCard = ({
    className,
    color,
    header,
    body,
    isDisabled,
    isFilled,
    ...otherProps
}: Props): ReactElement => {


    const compactClasses = clsx(
        'brew-StatusCard',
        'brew-StatusCard--compact',
        `brew-StatusCard__color--${color}`,
        { 'brew-StatusCard--isDisabled': isDisabled },
        { 'brew-StatusCard--isFilled': isFilled },
        className,
    );


    return (
        <div className={compactClasses} {...otherProps}>
            <Typography align="center" color={color} variant="body1">
                {header}
            </Typography>
            <Typography align="center" className="cardBody" variant="body1">
                {body.toUpperCase()}
            </Typography>
        </div>
    );


};


export default CompactStatusCard;
