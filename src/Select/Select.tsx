import React from 'react';
import {
    Select as MUISelect,
    SelectClassKey,
    SelectProps as MUISelectProps,
} from '@material-ui/core';
import useStyles from './Select.styles';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import { merge } from 'lodash';

type BkSelectProps = MUISelectProps & {
    classes?: ClassNameMap<
        SelectClassKey | 'menu' | 'menuItem' | 'activeMenuItem'
    >;
};

const Select = React.forwardRef(
    (props: BkSelectProps, ref: React.Ref<HTMLSelectElement>) => {
        const {
            classes: userClasses = {} as BkSelectProps['classes'],
            ...otherProps
        } = props;
        const classes = merge(useStyles(), userClasses);

        return <MUISelect classes={classes} ref={ref} {...otherProps} />;
    },
);

Select.displayName = 'Select';

export default Select;
