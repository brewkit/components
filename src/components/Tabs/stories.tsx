import React from 'react';
import Tabs from './index';
import Tab from '../Tab';
import TabContent from '../TabContent';
import TabPanel from '../TabPanel';

export default {
    title: 'Tabs',
};

export const SimpleTabs = () => {
    return (
        <React.Fragment>
            <Tabs value={false}>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
            </Tabs>
            <TabContent>
                <TabPanel></TabPanel>
            </TabContent>
        </React.Fragment>
    );
};