import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Flipped } from 'react-flip-toolkit';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';


function TooltipContent({
    className,
    controllerRef,
    anchor = 'top',
    color = 'primary',
    children,
    ...otherProps
}: Props): ReactElement {


    const tooltipRef = React.useRef();
    const [boundingRect] = React.useState(null);
    const nodeHeight = controllerRef?.controllerRef.offsetHeight;
    const nodeWidth = controllerRef?.offsetWidth;
    const tooltipClasses = clsx(
        'brew-Tooltip__content',
        [`brew-Tooltip--color-${color}`],
        [`brew-Tooltip--anchor-${anchor}`],
    );


    React.useEffect(() => {
        function onScroll(): void {

            /*
             * if (typeof controllerRef.getBoundingClientRect === 'function') {
             *     setBoundingRect(controllerRef.getBoundingClientRect());
             ** }
             */
        }
        onScroll();
        document.addEventListener('scroll', onScroll, true);
        window.addEventListener('resize', onScroll);

        return (): any => {
            document.removeEventListener('scroll', onScroll, true);
            window.removeEventListener('resize', onScroll);
        };
    }, []);


    function getHeight(node: any): any {
        return node?.offsetHeight;
    }

    function getWidth(node: any): any {
        return node?.offsetWidth;
    }


    React.useEffect(() => {
        const { current } = tooltipRef;
        const tooltipHeight = getHeight(current);
        const tooltipWidth = getWidth(current);

        /*
         * switch (anchor) {
         * case 'top':
         *     // do something
         *     break;
         * case 'right':
         *     // do something
         *     break;
         * case 'bottom':
         *     // do something
         *     break;
         * case 'left':
         *     // do something
         *     break;
         * default:
         *     // do something
         * }
         */

    }, [tooltipRef.current, boundingRect]);


    if (!document.body) return null;


    return ReactDOM.createPortal(
        <Flipped flipId="tooltip">
            <span className={className} ref={tooltipRef} {...otherProps}>
                <span className={tooltipClasses}>
                    <Typography as="span">{children}</Typography>
                </span>
            </span>
        </Flipped>,
        document.body,
    );

}


export default TooltipContent;
