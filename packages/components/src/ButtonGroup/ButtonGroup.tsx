import * as React from 'react';
import MuiButtonGroup, {
  ButtonGroupProps as MUIButtonGroupProps,
} from '@material-ui/core/ButtonGroup';

export type BkButtonGroupProps = MUIButtonGroupProps;

export const ButtonGroup = React.forwardRef(
  (
    { ...otherProps }: BkButtonGroupProps,
    ref: React.Ref<any>
  ): React.ReactElement => <MuiButtonGroup ref={ref} {...otherProps} />
);

ButtonGroup.displayName = 'ButtonGroup';

export default ButtonGroup;
