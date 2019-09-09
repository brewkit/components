import React from 'react';
import clsx from 'clsx';
import { Props } from './types';
import styles from './styles.scss';


function Icon(props: Props) {


    const {
        children,
        color = 'primary',
        size = 'inherit',
        className,
        ...otherProps
    } = props;


    /**
     * Combine our classes based on props
     */
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
