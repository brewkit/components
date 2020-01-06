import React, { ReactElement } from 'react';
import clsx from 'clsx';
import BannerIcon from './components/BannerIcon';
import BannerBody from './components/BannerBody';
import BannerInfo from './components/BannerInfo';
import BannerTitle from './components/BannerTitle';
import { Props } from './types';


function Banner({
    children,
    className,
    color,
    hasBodyInfo,
    variant,
    ...otherProps
}: Props): ReactElement {


    const bannerClasses = clsx(
        'brew-Banner',
        `brew-Banner--color-${color}`,
        `brew-Banner--${variant}`,
        { 'brew-Banner--hasBodyInfo': hasBodyInfo },
        className,
    );


    return (
        <div className={bannerClasses} {...otherProps}>
            {children}
        </div>
    );
}


Banner.Icon = BannerIcon;
Banner.Body = BannerBody;
Banner.Title = BannerTitle;
Banner.Info = BannerInfo;


export default Banner;
