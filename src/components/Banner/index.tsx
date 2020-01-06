import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Icon from '../Icon';
import Typography from '../Typography';
import { Props } from './types';


function Banner({
    bannerText,
    className,
    color,
    icon,
    infoText,
    ...otherProps
}: Props): ReactElement {


    const bannerClasses = clsx(
        'brew-Banner',
        `brew-Banner--color-${color}`,
        className,
    );

    const hasOnlyBannerText = (<Typography className="brew-Banner__text" variant="h3">{bannerText}</Typography>);
    const hasInfoText = (
        <div>
            <Typography className="brew-Banner__text" variant="h3">{bannerText}</Typography>
            <Typography className="brew-Banner__infoText" variant="body1">{infoText}</Typography>
        </div>
    );


    return (
        <div className={bannerClasses} {...otherProps} >
            {icon && (<Icon className="brew-Banner__icon" size="large">{icon}</Icon>)}
            {infoText ? hasInfoText : hasOnlyBannerText}
        </div>
    );
}


export default Banner;
