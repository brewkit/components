import React from 'react';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';
import Icon from '@components/Icon';
import { Props } from './types';


export const AppBarItem = React.forwardRef(({
    children,
    className,
    iconName,
    label,
    linkTo,
    onClick,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const Element = linkTo ? NavLink : 'a';


    let navLinkProps: any = {};

    if (linkTo)
        navLinkProps = {
            activeClassName: 'brew-AppBarItem--isActive',
            to: linkTo,
        };


    const classes = clsx(
        'brew-AppBarItem',
        className,
    );


    return (
        <Element
            className={classes}
            ref={ref}
            onClick={onClick}
            {...navLinkProps}
            {...otherProps}
        >
            <Icon
                className="brew-AppBarItem__icon"
                color="primary"
                size="large"
            >
                {iconName}
            </Icon>
            <span className="brew-AppBarItem__label">{label}</span>
        </Element>
    );


});


AppBarItem.displayName = 'AppBarItem';


export default AppBarItem;
