import React from 'react';
import { merge } from 'lodash';
import {
    FormControlLabelProps,
    FormControlLabel as MUIFormControlLabel,
} from '@material-ui/core';
import useStyles from './FormControlLabel.styles';

export type BkFormControlLabelProps = FormControlLabelProps;

const FormControlLabel = (props: BkFormControlLabelProps) => {
    const { classes: userClasses = {} } = props;
    const classes = merge(useStyles(), userClasses);

    return <MUIFormControlLabel classes={classes} {...props} />;
};

FormControlLabel.displayName = 'FormControlLabel';

export default FormControlLabel;
