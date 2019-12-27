import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';


const CompactStatusCard = ({
    className,
    color,
    header,
    body,
    disabled,
    fill,
    ...otherProps
}: Props): ReactElement => {


    const compactClasses = clsx(
        'StatusCard__wrapper--compact',
        `StatusCard__color--${color}`,
        { 'StatusCard--isDisabled': disabled },
        { 'StatusCard--isFilled': fill },
        className,
    );


    return (
        <div className={compactClasses} {...otherProps}>
            <Typography align="center" color={color} variant="body1">
                {header}
            </Typography>
            <Typography align="center" className="StatusCard__cardBody" variant="body1">
                {body.toUpperCase()}
            </Typography>
        </div>
    );


};


export default CompactStatusCard;
