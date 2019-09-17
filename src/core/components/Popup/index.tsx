import React from 'react';
import clsx from 'clsx';
import { Flipper, Flipped } from 'react-flip-toolkit';
import Typography from '../Typography';
import { Props } from './types';
import styles from './styles.scss';


/**
 * The `<Popup />` component allows you to specify content to hover adjacent to another element on hover or click.
 */
function Popup({
    color = 'primary',
    content,
    position = 'top-left',
    isBlock = false,
    isConstrained = false,
    children,
    className,
    ...otherProps
}: Props) {


    const [isDisplaying, setIsDisplaying] = React.useState(false);
    let intentTimeout: NodeJS.Timer;


    const wrapperClasses = clsx(
        styles.wrapper,
        styles[`color--${color}`],
        styles[`position--${position}`],
        { [styles.isBlock]: isBlock },
        { [styles.isConstrained]: isConstrained },
    );


    const popupClasses = clsx(
        styles.popup,
        { [styles.isDisplaying]: isDisplaying },
        className,
    );


    function handleMouseEnter() {
        clearTimeout(intentTimeout);
        intentTimeout = setTimeout(() => {
            setIsDisplaying(true);
        }, 500);
    }


    function handleMouseLeave() {
        clearTimeout(intentTimeout);
        intentTimeout = setTimeout(() => {
            setIsDisplaying(false);
        }, 1000);
    }


    return (
        <Flipper flipKey={isDisplaying} element={isBlock ? 'div' : 'span'}>
            <div
                className={wrapperClasses}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                {...otherProps}
            >
                {children}
                <Flipped flipId="popup">
                    <div className={popupClasses}>
                        <Typography>{content}</Typography>
                    </div>
                </Flipped>
            </div>
        </Flipper>
    );


}


export default Popup;