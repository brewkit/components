import React, { ReactElement } from 'react';
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
function Flag({
    color = 'info',
    children,
    className,
    ...otherProps
}: Props): ReactElement {


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
            {...otherProps}
        />
    );


}


export default Flag;
