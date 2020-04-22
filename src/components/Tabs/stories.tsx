import React from 'react';
import Tabs from './index';
import TabList from '../TabList';
import Tab from '../Tab';
import TabPanel from '../TabPanel';
import Typography from '../Typography';

export default {
    title: 'In Development|Navigation/Tabs',
};

export const withSimpleTabs = () => {
    const [currentTab, setCurrentTab] = React.useState(0);

    const handleSetTab = (e, i) => {
        setCurrentTab(i);
    };

    return (
        <Tabs value={currentTab} onChange={handleSetTab}>
            <TabList>
                <Tab label="Item One" />
                <Tab label="Item Two" />
                <Tab label="Item Three" />
                <Tab label="Input content" />
            </TabList>
            <TabPanel value={0} style={{ padding: '1rem' }}>
                <Typography variant="body1">Item One Content</Typography>
            </TabPanel>
            <TabPanel value={1} style={{ padding: '1rem' }}>
                <Typography variant="body1">Item Two Content</Typography>
            </TabPanel>
            <TabPanel value={2} style={{ padding: '1rem' }}>
                <Typography variant="body1">Item Three Content</Typography>
            </TabPanel>
            <TabPanel value={3} style={{ padding: '1rem' }}>
                <Typography>Warning! I don't preserve content</Typography>
                <Typography>If you change this input's value and then come back, the value will be lost</Typography>
                <input type="text" placeholder="Change me" />
            </TabPanel>
        </Tabs>
    );
};

export const withIcons = () => {
    const [currentTab, setCurrentTab] = React.useState(0);

    return (
        <Tabs value={currentTab} onChange={(e, i) => {
            setCurrentTab(i);
        }}>
            <TabList>
                <Tab icon="speed" label="Dashboard" />
                <Tab icon="devices" label="Devices"/>
                <Tab icon="settings" label="Site Settings"/>
                <Tab icon="account_circle" label="Client Services"/>
                <Tab icon="description" label="Notes"/>
            </TabList>
            <TabPanel value={0} style={{ padding: '1rem' }}>
                <Typography variant="body1">Dashboard</Typography>
            </TabPanel>
            <TabPanel value={1} style={{ padding: '1rem' }}>
                <Typography variant="body1">Devices</Typography>
            </TabPanel>
            <TabPanel value={2} style={{ padding: '1rem' }}>
                <Typography variant="body1">Site Settings</Typography>
            </TabPanel>
            <TabPanel value={3} style={{ padding: '1rem' }}>
                <Typography variant="body1">Client Services</Typography>
            </TabPanel>
            <TabPanel value={4} style={{ padding: '1rem' }}>
                <Typography variant="body1">Notes</Typography>
            </TabPanel>
        </Tabs>
    )
};

export const withPreservedContent = () => {
    const [currentTab, setCurrentTab] = React.useState(0);

    return (
        <Tabs 
            shouldPreserveContent 
            value={currentTab} 
            onChange={(e, i) => {
                setCurrentTab(i);
            }}
        >
            <TabList>
                <Tab label="Input 1" />
                <Tab label="Input 2"/>
                <Tab label="Input 3"/>
            </TabList>
            <TabPanel value={0} style={{ padding: '1rem' }}>
                <input type="text" placeholder="Change me" />
            </TabPanel>
            <TabPanel value={1} style={{ padding: '1rem' }}>
                <input type="text" placeholder="Change me" />
            </TabPanel>
            <TabPanel value={2} style={{ padding: '1rem' }}>
                <input type="text" placeholder="Change me" />
            </TabPanel>
        </Tabs>
    );
}