import React from 'react';
import { CardMedia as MuiCardMedia } from '@material-ui/core';
import { Props } from './types';


export const CardMedia =({
    children,
    component = 'div',
    image,
    src,
}: Props): React.ReactElement => {


    const classes = {
        root: 'brew-Card__mediaWrapper',
        img: 'brew-Card__img',
        media: 'brew-Card__media',
    };


    return (
        <MuiCardMedia
            classes={classes}
            component={component}
            image={image}
            src={src}
        >
            {children}
        </MuiCardMedia>
    );


};


CardMedia.displayName = 'CardMedia';


export default CardMedia;
