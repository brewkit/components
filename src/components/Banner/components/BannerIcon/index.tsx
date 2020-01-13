import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Icon from '../../../Icon';
import Progress from '../../../Progress';
import { Props } from './types';


function BannerIcon({
    className,
    iconName,
    isLoading,
    ...otherProps
}: Props): ReactElement {


    const iconClasses = clsx(
        'brew-Banner__icon',
        className,
    );


    const loading = (
        <Progress className="brew-Banner__iconLoading" size="medium" variant="circular" />
    );


    const icon = (
        <Icon className="brew-Banner__iconImage" size="large">
            {iconName}
        </Icon>
    );


    return (
        <div className={iconClasses} {...otherProps}>
            {isLoading ? loading : icon}
        </div>
    );


}


export default BannerIcon;
