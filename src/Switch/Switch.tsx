import * as React from 'react';
import MUISwitch, {
    SwitchProps as MUISwitchProps,
} from '@material-ui/core/Switch';
import useStyles from './Switch.styles';

export type BkSwitchProps = MUISwitchProps;

const Switch = React.forwardRef(
    (
        { ...otherProps }: BkSwitchProps,
        ref: React.Ref<HTMLButtonElement>,
    ): React.ReactElement => {
        const classes = useStyles();
        return <MUISwitch classes={classes} ref={ref} {...otherProps} />;
    },
);

Switch.displayName = 'BkSwitch';

export default Switch;
