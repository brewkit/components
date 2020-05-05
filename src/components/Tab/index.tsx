import React from 'react';
import MuiTab from '@material-ui/core/Tab';
import Typography from '@components/Typography';
import Icon from '@components/Icon';
import { Props } from './types';

/**
 * The `<Tab />` component shows a tab within the `<TabList />` component.  
 * 
 * Tabs organize and allow navigation between groups of content or different URL's.
 */
const Tab = React.forwardRef(({ label = '', icon, ...otherProps }: Props, ref: React.Ref<any>): React.ReactElement => {
    const classes = {
        root: 'brew-Tab',
        labelIcon: 'brew-Tab--labelIcon',
        textColorInherit: 'brew-Tab--textColorInherit',
        textColorPrimary: 'brew-Tab--textColorPrimary',
        textColorSecondary: 'brew-Tab--textColorSecondary',
        selected: 'brew-Tab--selected',
        disabled: 'brew-Tab--disabled',
        fullWidth: 'brew-Tab--fullWidth',
        wrapped: 'brew-Tab--wrapped',
        wrapper: 'brew-Tab__wrapper',
    };

    return (
        <MuiTab
            {...otherProps}
            classes={classes}
            ref={ref}
            icon={icon ? <Icon className="brew-Tab__icon">{icon}</Icon> : undefined}
            label={<Typography className="brew-Tab__label">{label}</Typography>}
        />
    );
});

export default Tab;
