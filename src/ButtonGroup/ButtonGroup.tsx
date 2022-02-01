import * as React from 'react';
import { merge } from 'lodash';
import MuiButtonGroup, {
    ButtonGroupProps as MUIButtonGroupProps,
} from '@material-ui/core/ButtonGroup';
import useStyles from './ButtonGroup.styles';

export type BkButtonGroupProps = MUIButtonGroupProps;

const ButtonGroup = React.forwardRef(
    (
        props: BkButtonGroupProps,
        ref: React.Ref<HTMLDivElement>,
    ): React.ReactElement => {
        const {
            classes: userClasses = {},
            color = 'primary',
            children,
            variant = 'contained',
            orientation = 'horizontal',
            disableElevation = true,
            size = 'small',
            ...otherProps
        } = props;
        const classes = merge(useStyles(), userClasses);

        return (
            <MuiButtonGroup
                classes={classes}
                ref={ref}
                color={color}
                variant={variant}
                disableElevation={disableElevation}
                orientation={orientation}
                size={size}
                {...otherProps}>
                {children}
            </MuiButtonGroup>
        );
    },
);

ButtonGroup.displayName = 'BkButtonGroup';

export default ButtonGroup;
