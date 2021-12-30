import React from 'react';
import {
    FormControlLabelProps,
    FormControlLabel as MUIFormControlLabel,
} from '@material-ui/core';
import useStyles from './FormControlLabel.styles';

export type BkFormControlLabelProps = FormControlLabelProps;

const FormControlLabel = (props: BkFormControlLabelProps) => {
    const classes = useStyles();
    return <MUIFormControlLabel classes={classes} {...props} />;
};

FormControlLabel.displayName = 'FormControlLabel';

export default FormControlLabel;
