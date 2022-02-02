import * as React from 'react';
import { merge } from 'lodash';
import classNames from 'classnames';
import MUIButton, {
    ButtonClassKey as MUIButtonClassKey,
    ButtonProps as MUIButtonProps,
} from '@material-ui/core/Button';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import CircularProgress, { BkCircularProgressProps } from '../CircularProgress';
import Typography, { BkTypographyProps } from '../Typography';
import useStyles from './Button.styles';
import { withoutKeys } from '../utils/withoutKeys';

export type BkButtonClassKey = 'loading' | 'loader' | 'content';

export type BkButtonProps = MUIButtonProps & {
    /**
     * Custom classes for Button
     */
    classes?: ClassNameMap<MUIButtonClassKey | BkButtonClassKey>;
    /**
     * If `true`, the button will be disabled and show a spinner.
     * @default false
     */
    loading?: boolean;

    /**
     * Props for circular progress if loading is present
     * @default {}
     */
    CircularProgressProps?: BkCircularProgressProps;

    /**
     * Props for typography text
     * @default {}
     */
    TypographyProps?: BkTypographyProps;
};

const Button = React.forwardRef(
    (
        props: BkButtonProps,
        ref: React.Ref<HTMLButtonElement>,
    ): React.ReactElement => {
        const classes = useStyles();
        const {
            loading = false,
            disabled,
            classes: userClasses = {} as BkButtonProps['classes'],
            CircularProgressProps = {},
            disableElevation = true,
            startIcon,
            endIcon,
            children,
            className,
            variant = 'contained',
            color = 'primary',
            TypographyProps = {},
            ...otherProps
        } = props;
        const mergedClasses = merge(
            withoutKeys(classes, ['loader', 'loading', 'content']),
            userClasses,
        );

        return (
            <MUIButton
                {...otherProps}
                classes={mergedClasses}
                className={classNames(
                    classes.root,
                    loading && classes.loading,
                    className,
                )}
                disabled={disabled ?? loading}
                ref={ref}
                variant={variant}
                disableElevation={disableElevation}
                color={color}>
                <div
                    className={classNames(
                        classes?.content,
                        userClasses?.content,
                    )}>
                    {startIcon}
                    {children && (
                        <Typography variant="body2" {...TypographyProps}>
                            {children}
                        </Typography>
                    )}
                    {endIcon}
                </div>
                <div
                    className={classNames(
                        classes?.loader,
                        userClasses?.loader,
                    )}>
                    <CircularProgress
                        color="primary"
                        size="1rem"
                        thickness={5}
                        {...CircularProgressProps}
                    />
                </div>
            </MUIButton>
        );
    },
);

Button.displayName = 'Button';

export default Button;
