// import * as React from 'react';
import { StyledParentComponent } from '../types';

// import { TabsProps } from '@material-ui/core/Tabs/Tabs.d.ts';

export interface Props extends StyledParentComponent {

    /**
     * Callback fired when the value changes.
     */
    onChange?: (event: React.ChangeEvent<{}>, value: any) => void,

    /**
     * The value of the currently selected Tab.  If you don't want any selected Tab, you can set this property to false.
     */
    value?: any,

    /**
     * Whether the tab panels should be hidden or removed completely.  Note: this does not automatically work with router-based tab functionality.
     */
    shouldPreserveContent?: boolean,

    /**
     * The component you want to use as the main tabs component
     */
    component?: React.ElementType,
};