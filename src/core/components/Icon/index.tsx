import React from 'react';
import clsx from 'clsx';
import { Props } from './types';
import styles from './styles.scss';


/**
 * The `<Icon />` component renders an SVG icon. By default, it can render any of the icons available in
 * [Material Design (Outline)](https://material.io/tools/icons/?style=outline). Built-in sizing options are in `em`
 * units as to be similar to any neighboring fonts.
 */
function Icon({
    children,
    color = 'primary',
    size = 'inherit',
    className,
    ...otherProps
}: Props) {


    /** Combine our classes based on props */
    const classes = clsx(
        styles.wrapper,
        styles[`color--${color}`],
        styles[`size--${size}`],
        className,
    );


    /** Lazy load our icon */
    const Image = React.lazy(() => {
        return new Promise((resolve) => {
            import(`./material-icons/dist/${children}.js`)
                .then(response => resolve(response));
        });
    });


    return (
        <span
            className={classes}
            {...otherProps}
        >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" height="100%">
                <React.Suspense fallback="&#9744;">
                    <Image />
                </React.Suspense>
            </svg>
        </span>
    );

}


export default Icon;
