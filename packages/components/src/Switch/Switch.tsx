import * as React from 'react';
import MUISwitch, {
  SwitchProps as MUISwitchProps,
} from '@material-ui/core/Switch';

export type BkSwitchProps = MUISwitchProps;

export const Switch = React.forwardRef(
  (
    { ...otherProps }: BkSwitchProps,
    ref: React.Ref<any>
  ): React.ReactElement => <MUISwitch ref={ref} {...otherProps} />
);

Switch.displayName = 'Switch';

export default Switch;
