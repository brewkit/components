import * as React from 'react';
import MuiButtonGroup, {
    ButtonGroupProps as MUIButtonGroupProps,
} from '@material-ui/core/ButtonGroup';
import useStyles from './ButtonGroup.styles';

export type BkButtonGroupProps = MUIButtonGroupProps;

export const ButtonGroup = React.forwardRef(
    (
        { ...otherProps }: BkButtonGroupProps,
        ref: React.Ref<any>,
    ): React.ReactElement => {
        const classes = useStyles();
        return <MuiButtonGroup classes={classes} ref={ref} {...otherProps} />;
    },
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
