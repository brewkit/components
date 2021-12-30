import * as React from 'react';
import MuiRadio, { RadioProps as MUIRadioProps } from '@material-ui/core/Radio';
import useStyles from './Radio.styles';

export type BkRadioProps = MUIRadioProps;

export const Radio = React.forwardRef(
    (
        { ...otherProps }: BkRadioProps,
        ref: React.Ref<any>,
    ): React.ReactElement => {
        const classes = useStyles();
        return <MuiRadio classes={classes} ref={ref} {...otherProps} />;
    },
);

Radio.displayName = 'Radio';

export default Radio;
