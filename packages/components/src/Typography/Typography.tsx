import React from 'react';
import classnames from 'classnames';
import {
  Typography as MUITypography,
  TypographyProps as MUITypographyProps,
} from '@material-ui/core';

import useStyles from './Typography.styles';

type ColorTypes =
  | 'primary'
  | 'secondary'
  | 'text'
  | 'error'
  | 'success'
  | 'warning'
  | 'info';

export interface BkTypographyProps extends Omit<MUITypographyProps, 'color'> {
  color?: ColorTypes;
}

const Typography = React.forwardRef(
  (props: BkTypographyProps, ref: React.Ref<any>) => {
    const {
      children,
      className,
      classes: classesProp = {},
      color = 'text',
      variant = 'body1',
      ...otherProps
    } = props;

    const userClasses = useStyles();
    const classes = classnames(classesProp, userClasses[color], className);

    return (
      <MUITypography
        className={classes}
        color={undefined}
        variant={variant}
        ref={ref}
        {...otherProps}
      >
        {children}
      </MUITypography>
    );
  }
);

export default Typography;
