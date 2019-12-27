import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Icon from '../../../Icon';
import Typography from '../../../Typography';
import { Props } from './types';


const StandardStatusCard = ({
    className,
    color,
    icon,
    header,
    body,
    disabled,
    fill,
    ...otherProps
}: Props): ReactElement => {


    const standardClasses = clsx(
        'StatusCard__wrapper--standard',
        `StatusCard__color--${color}`,
        { 'StatusCard--isDisabled': disabled },
        { 'StatusCard--isFilled': fill },
        className,
    );


    return (
        <div className={standardClasses} {...otherProps}>
            <section className="StatusCard__icon">
                <Icon color={color}>
                    {icon}
                </Icon>
            </section>
            <section>
                <Typography color={color} variant="h1">
                    {header}
                </Typography>
                <Typography color={color} variant="body1">
                    {body}
                </Typography>
            </section>
        </div>
    );


};


export default StandardStatusCard;
