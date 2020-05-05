import React from 'react';

export const TabContext = React.createContext({});

export const useTabs = (): { value?: String, onChange?: (event?: React.ChangeEvent<{}>, value?: any) => void, shouldPreserveContent?: boolean, } => React.useContext(TabContext);