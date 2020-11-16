import React from 'react';

import { Dialog as MuiDialog, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

import { Props } from './types';

import styles from './styles';

import {
    CheckCircleOutlined,
    InfoOutlined,
    WarningOutlined,
    ErrorOutlined,
} from '@material-ui/icons';

const defaultIconMapping = {
    success: <CheckCircleOutlined fontSize="inherit" />,
    warning: <WarningOutlined fontSize="inherit" />,
    error: <ErrorOutlined fontSize="inherit" />,
    info: <InfoOutlined fontSize="inherit" />,
};


/**
 * Dialogs inform users about a task and can contain critical information, require decisions,
 * or involve multiple tasks.
 *
 * [Material-UI Docs](https://material-ui.com/components/dialogs/)
 *
 *
 * ## Differences in Brewkit:
 *
 * - Adds a dialog `title` prop.
 * - Adds a `severity` prop that determines the icon and the color of the dialog.
 * - Adds `icon` and `iconMapping` props that allow to change the default icons.
 */
export const Dialog = React.forwardRef(({
    severity = 'success',
    title,
    icon,
    iconMapping = defaultIconMapping,
    classes,
    PaperProps,
    children,
    ...other
}: Props, ref: React.Ref<any>): React.ReactElement => {
    const paperProps = { ...{ elevation: 0 }, ...PaperProps };

    const dialogIcon = icon || iconMapping[severity] || defaultIconMapping[severity];
    const colorClass = classes[severity];

    return (
        <MuiDialog
            PaperProps={paperProps}
            ref={ref}
            {...other}
        >
            <div className={clsx(classes.icon, colorClass)}>
                {dialogIcon}
            </div>
            <div className={classes.title}>
                <Typography className={colorClass} variant="h3">{title}</Typography>
            </div>
            {children}
        </MuiDialog>
    );
});

Dialog.displayName = 'Dialog';

export default withStyles(styles)(Dialog);
