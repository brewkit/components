import React from 'react';

const TabContent = React.forwardRef((props, ref) => {
    return (
        <div {...props} ref={ref} />
    );
});

export default TabContent;