import * as React from 'react';
import { merge } from 'lodash';
import MuiRadio, { RadioProps as MUIRadioProps } from '@material-ui/core/Radio';
import useStyles from './Radio.styles';

export type BkRadioProps = MUIRadioProps;

const Radio = React.forwardRef(
    (
        props: BkRadioProps,
        ref: React.Ref<HTMLButtonElement>,
    ): React.ReactElement => {
        const { classes: userClasses, ...otherProps } = props;
        const classes = merge(useStyles(), userClasses);

        return <MuiRadio classes={classes} ref={ref} {...otherProps} />;
    },
);

Radio.displayName = 'Radio';

export default Radio;
