import * as React from 'react';
import clsx from 'clsx';
import MUIButton, {
  ButtonProps as MUIButtonProps,
} from '@material-ui/core/Button';
import CircularProgress from '../CircularProgress/CircularProgress';
import useStyles from './Button.styles';

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
      startIcon,
      endIcon,
      children,
      className,
      ...otherProps
    } = props;

    const classes = useStyles();

    /**
     * merge our custom classes? into the ones passed to the component
     */
    const buttonClasses = clsx(
      classes?.root,
      loading && classes?.loading,
      className
    );

    return (
      <MUIButton
        {...otherProps}
        className={buttonClasses}
        disabled={disabled ?? loading}
        ref={ref}
      >
        <div className={classes?.content}>
          {startIcon}
          {children && <span>{children}</span>}
          {endIcon}
        </div>

        <div className={classes?.loader}>
          <CircularProgress color="primary" size="1rem" thickness={5} />
        </div>
      </MUIButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
