import React from 'react';
import Paper from '@components/Paper';
import clsx from 'clsx';
import { Props } from './types';


/**
 * Cards are surfaces that display content and actions on a single topic.
 * They should be easy to scan for relevant and actionable information.
 * Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
 */
export const Card = React.forwardRef(({
    className,
    isRaised = false,
    ...other
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classes = clsx(
        'brew-Card',
        className,
    );


    return <Paper className={classes} elevation={isRaised ? 3 : 1} ref={ref} {...other} />;


});


Card.displayName = 'Card';


export default Card;
