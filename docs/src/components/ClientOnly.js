import React from 'react';

// https://github.com/vercel/next.js/issues/7322
const ClientOnly = ({ children, ...delegated }) => {
    const [hasMounted, setHasMounted] = React.useState(false);

    React.useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) return null;

    return <React.Fragment {...delegated}>{children}</React.Fragment>;
};

export default ClientOnly;
