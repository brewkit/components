import React from 'react';
import MuiTab from '@material-ui/core/Tab';
import { Props } from './types';

/**
 * The `<Tab />` component shows a tab within the `<Tabs />` component.  
 * 
 * Tabs organize and allow navigation between groups of content or different URL's.
 */
const Tab = React.forwardRef(({ classes, ...otherProps }: Props, ref: React.Ref<any>): React.ReactElement => {
    const mergedClasses = {
        root: 'brew-Tab',
        ...classes,
    };

    return (
        <MuiTab
            {...otherProps}
            classes={mergedClasses}
            ref={ref} 
        />
    );
});

export default Tab;