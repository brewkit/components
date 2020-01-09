import React, { ReactElement, ReactNode, Ref } from 'react';
import clsx from 'clsx';
import { Props } from './types';


/**
 * The `<Typography />` component renders text using the 'Roboto' font in various styles.
 */
function Typography({
    variant = 'inherit',
    color = 'initial',
    align = 'inherit',
    display = 'initial',
    shouldTruncate = false,
    as = null,
    children,
    className,
    ...otherProps
}: Props, ref: Ref<HTMLElement>): ReactElement {


    const classes = clsx(
        'brew-Typography',
        [`brew-Typography--variant-${variant}`],
        [`brew-Typography--color-${color}`],
        [`brew-Typography--align-${align}`],
        [`brew-Typography--display-${display}`],
        { 'brew-Typography--shouldTruncate': shouldTruncate },
        className,
    );


    const TextElement = (props: any): ReactElement => {
        const getElement = (): ReactNode => {
            if (variant === 'h1') return 'h1';

            return 'span';
        };
        const Variant = getElement();

        return (
            <Variant {...props} />
        );
    };


    return (
        <TextElement className={classes} ref={ref} {...otherProps}>
            {children}
        </TextElement>
    );


}


export default React.forwardRef(Typography);
