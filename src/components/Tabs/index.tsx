import React from 'react';
import MuiTabs from '@material-ui/core/Tabs';
import { Props } from './types';

/**
 * The `<Tabs />` component serves as a wrapper for multiple child `<Tab />` components.
 */
const Tabs = React.forwardRef(({ classes, ...otherProps }: Props, ref: React.Ref<any>): React.ReactElement => {
    const mergedClasses = {
        root: 'brew-Tabs',
        ...classes,
    };

    return (
        <MuiTabs
            {...otherProps}
            classes={mergedClasses}
            ref={ref}
        />
    );
});

export default Tabs;