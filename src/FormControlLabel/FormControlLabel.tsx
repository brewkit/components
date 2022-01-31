import React from 'react';
import { merge } from 'lodash';
import {
    FormControlLabelProps,
    FormControlLabel as MUIFormControlLabel,
} from '@material-ui/core';
import useStyles from './FormControlLabel.styles';

export type BkFormControlLabelProps = FormControlLabelProps;

function FormControlLabel(props: BkFormControlLabelProps): React.ReactElement {
    const { classes: userClasses = {} } = props;
    const classes = merge(useStyles(), userClasses);

    return <MUIFormControlLabel classes={classes} {...props} />;
}

FormControlLabel.displayName = 'BkFormControlLabel';

export default FormControlLabel;
