import React, { ReactElement } from 'react';
import clsx from 'clsx';
import { Props } from './types';

function Banner({
    className,
}: Props): ReactElement {

    const bannerClasses = clsx(
        'brew-Banner',
        className,
    );


    return (
        <div className={bannerClasses}>
            hello
        </div>
    );
}


export default Banner;
