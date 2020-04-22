import React from 'react';
import clsx from 'clsx';
import { useTabs } from '../Tabs/context';
import { Props } from './types';

const TabPanel = React.forwardRef(({ className, value, style = {}, ...otherProps }: Props, ref: React.Ref<any>): React.ReactElement => {
    const classes = clsx(
        'brew-TabPanel',
        className,
    );

    const { value: tabValue = 0, shouldPreserveContent = false } = useTabs() || {};

    if (!shouldPreserveContent && value !== tabValue) {
        return <div />;
    }

    return (
        <div {...otherProps} 
            style={{
                ...style,
                display: !!shouldPreserveContent && value !== tabValue ? 'none' : undefined,
            }}
            className={classes} 
            ref={ref} 
        />
    );
});

export default TabPanel;