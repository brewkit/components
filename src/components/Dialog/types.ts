import React from 'react';
import { DialogProps } from '@material-ui/core/Dialog';
import { WithStyles } from '@material-ui/core/styles';

import styles from './styles';

export type Severity = 'success' | 'info' | 'warning' | 'error';

export type Props = Omit<DialogProps, 'classes' | 'title'> & WithStyles<typeof styles> & {

    /**
     * The severity of the dialog. This defines the color and icon used.
     * @default 'success'
     */
    severity?: Severity,

    /**
     * Dialog title
     */
    title: NonNullable<React.ReactNode>,

    /**
     * Overrides the default dialog icon.
     * Unless provided, the icon is mapped to the value of the `severity` prop.
     */
    icon?: React.ReactNode,

    /**
     * The component maps the `severity` prop to a range of different icons,
     * for instance success to `<CheckCircleOutlined>`.
     * If you wish to change this mapping, you can provide your own.
     * Alternatively, you can use the `icon` prop to override the icon displayed.
     */
    iconMapping?: Partial<Record<Severity, React.ReactNode>>,
};
