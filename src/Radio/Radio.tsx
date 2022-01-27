import * as React from 'react';
import { merge } from 'lodash';
import MuiRadio, { RadioProps as MUIRadioProps } from '@material-ui/core/Radio';
import useStyles from './Radio.styles';

export type BkRadioProps = MUIRadioProps;

export const Radio = React.forwardRef(
    (props: BkRadioProps, ref: React.Ref<any>): React.ReactElement => {
        const { classes: userClasses, ...otherProps } = props;
        const classes = merge(useStyles(), userClasses);
        return <MuiRadio classes={classes} ref={ref} {...otherProps} />;
    },
);

Radio.displayName = 'Radio';

export default Radio;
