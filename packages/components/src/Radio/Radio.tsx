import * as React from 'react';
import MuiRadio, { RadioProps as MUIRadioProps } from '@material-ui/core/Radio';

export type BkRadioProps = MUIRadioProps;

export const Radio = React.forwardRef(
  (
    { ...otherProps }: BkRadioProps,
    ref: React.Ref<any>
  ): React.ReactElement => <MuiRadio ref={ref} {...otherProps} />
);

Radio.displayName = 'Radio';

export default Radio;
