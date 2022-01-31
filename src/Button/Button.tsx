import * as React from 'react';
import { merge } from 'lodash';
import clsx from 'clsx';
import MUIButton, {
    ButtonClassKey as MUIButtonClassKey,
    ButtonProps as MUIButtonProps,
} from '@material-ui/core/Button';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';
import CircularProgress, { BkCircularProgressProps } from '../CircularProgress';
import { useStyles } from './Button.styles';
import withoutKeys from '../utils/withoutKeys';

type BkButtonClassKey = 'loading' | 'loader' | 'content';

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
};

const Button = React.forwardRef(
    (
        props: BkButtonProps,
        ref: React.Ref<HTMLButtonElement>,
    ): React.ReactElement => {
        const {
            loading = false,
            disabled,
            classes: userClasses = {} as BkButtonProps['classes'],
            CircularProgressProps = {} as BkCircularProgressProps,
            disableElevation = true,
            startIcon,
            endIcon,
            children,
            className,
            variant = 'contained',
            color = 'primary',
            ...otherProps
        } = props;

        const classes = useStyles();
        const mergedClasses = merge(
            withoutKeys(classes, ['loader', 'loading', 'content']),
            userClasses,
        );

        return (
            <MUIButton
                {...otherProps}
                className={clsx(
                    classes.root,
                    loading && classes.loading,
                    className,
                )}
                classes={mergedClasses}
                color={color}
                disableElevation={disableElevation}
                disabled={disabled ?? loading}
                ref={ref}
                variant={variant}>
                <div className={clsx(classes?.content, userClasses?.content)}>
                    {startIcon}
                    {children && <span>{children}</span>}
                    {endIcon}
                </div>

                <div className={clsx(classes?.loader, userClasses?.loader)}>
                    <CircularProgress
                        {...CircularProgressProps}
                        color="primary"
                        size="1rem"
                        thickness={5}
                    />
                </div>
            </MUIButton>
        );
    },
);

Button.displayName = 'BkButton';

export default Button;
