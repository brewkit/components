import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Icon from '../Icon';
import Typography from '../Typography';
import Progress from '../Progress';
import Button from '../Button';
import { Props } from './types';


function Banner({
    bannerText,
    className,
    color,
    icon,
    infoText,
    isLoading,
    variant,
    ...otherProps
}: Props): ReactElement {


    const bannerClasses = clsx(
        'brew-Banner',
        `brew-Banner--color-${color}`,
        `brew-Banner--${variant}`,
        { 'brew-Banner--hasInfoText': infoText },
        className,
    );

    const hasOnlyBannerText = (<Typography className="brew-Banner__text" variant="h3">{bannerText}</Typography>);
    const hasInfoText = (
        <div className="brew-Banner__textWrapper">
            <Typography className="brew-Banner__text" variant="h3">{bannerText}</Typography>
            <Typography className="brew-Banner__infoText" variant="body1">{infoText}</Typography>
        </div>
    );
    const isIconLoading = isLoading
        ? (<Progress className="brew-Banner__icon" color={color} size="medium" variant="circular" />)
        : (<Icon className="brew-Banner__icon" size="large">{icon}</Icon>);


    return (
        <div className={bannerClasses} {...otherProps}>
            {isIconLoading}
            {infoText ? hasInfoText : hasOnlyBannerText}
            <section className="brew-Banner__buttonSection">
                <Button className="brew-Banner__closeButton">asdf</Button>
                <Button className="brew-Banner__actionButton">test</Button>
            </section>
        </div>
    );
}


export default Banner;
