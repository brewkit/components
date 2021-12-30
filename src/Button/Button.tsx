import * as React from 'react';
import clsx from 'clsx';
import MUIButton, {
    ButtonProps as MUIButtonProps,
} from '@material-ui/core/Button';
import CircularProgress from '../CircularProgress/CircularProgress';
import useStyles, { useMuiStyles } from './Button.styles';

export type BkButtonProps = MUIButtonProps & {
    /**
     * If `true`, the button will be disabled and show a spinner.
     * @default false
     */
    loading?: boolean;

    /**
     * @ignore
     */
    classes?: Record<string, any>;
};

export const Button = React.forwardRef(
    (props: BkButtonProps, ref: React.Ref<any>): React.ReactElement => {
        const {
            loading,
            disabled,
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
        const muiOverrides = useMuiStyles();

        /**
         * merge our custom classes? into the ones passed to the component
         */
        const buttonClasses = clsx(loading && classes?.loading);

        return (
            <MUIButton
                {...otherProps}
                classes={muiOverrides}
                className={buttonClasses}
                disabled={disabled ?? loading}
                ref={ref}
                variant={variant}
                disableElevation={disableElevation}
                color={color}>
                <div className={classes?.content}>
                    {startIcon}
                    {children && <span>{children}</span>}
                    {endIcon}
                </div>

                <div className={classes?.loader}>
                    <CircularProgress
                        color="primary"
                        size="1rem"
                        thickness={5}
                    />
                </div>
            </MUIButton>
        );
    },
);

Button.displayName = 'Button';

export default Button;
