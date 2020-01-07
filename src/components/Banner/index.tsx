import React, { ReactElement } from 'react';
import clsx from 'clsx';
import BannerIcon from './components/BannerIcon';
import BannerBody from './components/BannerBody';
import BannerButton from './components/BannerButton';
import BannerFooter from './components/BannerFooter';
import BannerInfo from './components/BannerInfo';
import BannerTitle from './components/BannerTitle';
import { Props } from './types';


function Banner({
    children,
    className,
    color,
    variant,
    ...otherProps
}: Props): ReactElement {


    const bannerClasses = clsx(
        'brew-Banner',
        `brew-Banner--color-${color}`,
        `brew-Banner--${variant}`,
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
Banner.Button = BannerButton;
Banner.Footer = BannerFooter;


export default Banner;
