import React from 'react';
import clsx from 'clsx';
import MuiSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import ExpandMoreOutlined from '@material-ui/icons/ExpandMoreOutlined';
import { Props, Option } from './types';


/**
 * Selects allow the user to select one or more items from a dropdown.
 */
export const Select = React.forwardRef(({
    options,
    className,
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => {


    const classNames = clsx(
        'brew-Select',
        className,
    );


    const classes = {
        root: 'brew-Select__base',
        icon: 'brew-Select__icon',
    };


    const MenuProps = {
        classes: {
            paper: 'brew-Select__menu',
            list: 'brew-Select__list',
        },
    };


    function renderOptions(): React.ReactNode {
        return options.map((option: Option, index: number) => (
            <MenuItem key={index} value={option.value}>
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
            ref={ref}
            {...otherProps}
        >
            {renderOptions()}
        </MuiSelect>
    );


});


Select.displayName = 'Select';


export default Select;
