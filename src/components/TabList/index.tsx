import React from 'react';
import MuiTabs from '@material-ui/core/Tabs';
import { useTabs } from '@components/Tabs/context';
import { Props } from './types';


/**
 * The `<TabList />` component provides a wrapper around the individual tabs.  It should exist as a child of the `<Tabs />` component.
 */
const TabList = React.forwardRef(({
    mobileBreakpoint = 600,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const [isMobile, setIsMobile] = React.useState(window && window.innerWidth <= mobileBreakpoint);
    const { value, onChange } = useTabs();


    const muiClasses = {
        root: 'brew-TabList',
        vertical: 'brew-TabList--vertical',
        flexContainer: 'brew-TabList__flexContainer',
        flexContainerVertical: 'brew-TabList__flexContainer--vertical',
        centered: 'brew-TabList__flexContainer--centered',
        scroller: 'brew-TabList__scroller',
        fixed: 'brew-TabList__scroller--fixed',
        scrollable: 'brew-TabList__scroller--scrollable',
        scrollButtons: 'brew-TabList__scrollButtons',
        scrollButtonsDesktop: 'brew-TabList__scrollButtons--desktop',
        indicator: 'brew-TabList__indicator',
    };


    React.useEffect(() => {

        const onWindowResize = () => {
            if (window.innerWidth <= mobileBreakpoint) {
                if (!isMobile) setIsMobile(true);
            }
            else {
                if (isMobile) setIsMobile(false);
            }
        }

        window.addEventListener('resize', onWindowResize);

        return () => {
            window.removeEventListener('resize', onWindowResize);
        }

    }, [isMobile, mobileBreakpoint]);


    return (
        <MuiTabs
            {...otherProps}
            variant={isMobile ? 'fullWidth' : 'scrollable'}
            classes={muiClasses}
            value={value}
            onChange={onChange}
            ref={ref}
        />
    );


});


export default TabList;
