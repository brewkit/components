import React, { ReactElement } from 'react';
import Icon from '../../../Icon';
import Progress from '../../../Progress';
import { Props } from './types';


function BannerIcon({
    className,
    iconName,
    isLoading,
    ...otherProps
}: Props): ReactElement {

    const loading = (<Progress className="brew-Banner__icon" size="medium" variant="circular" />);
    const icon = (<Icon className="brew-Banner__icon" size="large">{iconName}</Icon>);


    return (
        <div className={className} {...otherProps}>
            {isLoading ? loading : icon}
        </div>
    );


}


export default BannerIcon;
