import React from "react";
import Typography from "../../../Typography";
import { Props } from './types';

/**
 * The `<CardTitle />` component is used to create a consistent card header title.  It is meant to be used
 * inside `<CardHeader />`.
 */
function CardTitle({ children, ...otherProps }: Props) {
    return (
        <Typography variant="h2" {...otherProps}>{children}</Typography>
    );
}

export default CardTitle;
