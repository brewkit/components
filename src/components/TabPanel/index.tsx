import React from 'react';

const TabPanel = React.forwardRef((props, ref) => {
    return (
        <div {...props} ref={ref} />
    );
});

export default TabPanel;