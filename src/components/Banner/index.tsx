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
    iconName,
    info,
    isLoading,
    title,
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
            {iconName && (<BannerIcon iconName={iconName} isLoading={isLoading} />)}
            <BannerBody>
                <BannerTitle>{title}</BannerTitle>
                {info && (<BannerInfo>{info}</BannerInfo>)}
            </BannerBody>
            {children}
        </div>
    );


}


Banner.Button = BannerButton;
Banner.Footer = BannerFooter;


export default Banner;
