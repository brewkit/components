import React, { ReactElement } from 'react';
import clsx from 'clsx';
import BannerIcon from './components/BannerIcon';
import BannerBody from './components/BannerBody';
import BannerButton from './components/BannerButton';
import BannerInfo from './components/BannerInfo';
import BannerTitle from './components/BannerTitle';
import { Props } from './types';


function Banner({
    children,
    className,
    color,
    iconName,
    description,
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
            {iconName && (
                <BannerIcon iconName={iconName} isLoading={isLoading} />
            )}
            {(title || description) && (
                <BannerBody>
                    {title && (
                        <BannerTitle>{title}</BannerTitle>
                    )}
                    {description && (
                        <BannerInfo>{description}</BannerInfo>
                    )}
                </BannerBody>
            )}
            {children && (
                <div className="brew-Banner__content">{children}</div>
            )}
        </div>
    );


}


Banner.Body = BannerBody;
Banner.Button = BannerButton;
Banner.Icon = BannerIcon;
Banner.Info = BannerInfo;
Banner.Title = BannerTitle;


export default Banner;
