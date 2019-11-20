import React from 'react';


export const TabsContext = React.createContext({
    tabs: [],
    setTabs: () => {},
    setActiveTab: () => {},
});
