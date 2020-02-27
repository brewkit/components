import React from 'react';
import clsx from 'clsx';
import { Chip } from '@material-ui/core';
import Typography from '@components/Typography';
import { Props } from './types';


const classes = {
    label: 'brew-Flag__label',
};


/**
 * The `<Flag />` can be used to indicate a specific note of data or status on data associations for a specific entity.
 */
export const Flag = React.forwardRef(({
    color = 'info',
    children,
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classNames = clsx(
        'brew-Flag',
        `brew-Flag--color-${color}`,
        { 'brew-Flag--isEmpty': !children },
        className,
    );


    return (
        <Chip
            classes={classes}
            className={classNames}
            label={(
                <Typography align="center" className="brew-Flag__content" variant="caption">
                    {children}
                </Typography>
            )}
            ref={ref}
            {...otherProps}
        />
    );


});


export default Flag;
