import React from 'react';
import clsx from 'clsx';
import { merge } from 'lodash';
import {
    Typography as MUITypography,
    TypographyProps as MUITypographyProps,
} from '@material-ui/core';
import withoutKeys from '../utils/withoutKeys';
import useStyles from './Typography.styles';

export interface BkTypographyProps extends Omit<MUITypographyProps, 'color'> {
    color?:
        | 'primary'
        | 'secondary'
        | 'error'
        | 'success'
        | 'warning'
        | 'textPrimary'
        | 'textSecondary';
}

const Typography = React.forwardRef(
    (props: BkTypographyProps, ref: React.Ref<HTMLElement>) => {
        const {
            children,
            className,
            classes: userClasses = {},
            color = 'textPrimary',
            variant = 'body1',
            ...otherProps
        } = props;
        const typographyClasses = useStyles();
        const classes = merge(typographyClasses, userClasses);
        const muiClasses = withoutKeys(classes, [
            'error',
            'primary',
            'secondary',
            'success',
            'textPrimary',
            'textSecondary',
            'warning',
        ]);

        return (
            <MUITypography
                className={clsx(className, classes?.[color])}
                classes={muiClasses}
                color={undefined} // We manually resolve colors color
                ref={ref}
                variant={variant}
                {...otherProps}>
                {children}
            </MUITypography>
        );
    },
);

Typography.displayName = 'BkTypography';

export default Typography;
