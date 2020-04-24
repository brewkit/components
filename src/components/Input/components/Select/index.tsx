import React from 'react';
import clsx from 'clsx';
import MuiSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import { Props, Option } from './types';


/**
 * Selects allow the user to select one or more items from a dropdown.
 *
 * TO-DO:
 * - Add native selection when on mobile screens
 * - Add Form bindings so it can be validated
 * - Add defaultValue property
 */
export const Select = React.forwardRef(({
    options,
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const [isOpen, setIsOpen] = React.useState(false);


    const classNames = clsx(
        `brew-Select ${isOpen ? 'brew-Select--isOpen' : ''}`,
        className,
    );


    const classes = {
        root: 'brew-Select__base',
        icon: 'brew-Select__icon',
    };


    const MenuItemClasses = {
        root: 'brew-Select__menuItem',
        selected: 'brew-Select__menuItem--selected',
    };


    const MenuProps = {
        classes: {
            paper: 'brew-Select__menu',
            list: 'brew-Select__list',
        },
        anchorOrigin: { vertical: 'bottom' as 'bottom', horizontal: 'center' as 'center' },
        transformOrigin: { vertical: 'top' as 'top', horizontal: 'center' as 'center' },
        getContentAnchorEl: null,
    };


    function renderOptions(): React.ReactNode {
        return options.map((option: Option, index: number) => (
            <MenuItem classes={MenuItemClasses} key={index} value={option.value}>
                {option.label}
            </MenuItem>
        ));
    }


    return (
        <MuiSelect
            classes={classes}
            className={classNames}
            IconComponent={ExpandMoreOutlined}
            MenuProps={MenuProps}
            onClose={(): void => setIsOpen(false)}
            onOpen={(): void => setIsOpen(true)}
            ref={ref}
            {...otherProps}
        >
            {renderOptions()}
        </MuiSelect>
    );


});


Select.displayName = 'Select';


export default Select;
