import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Flipped } from 'react-flip-toolkit';
import clsx from 'clsx';
import { Props } from './types';


function TooltipContent({
    className,
    boundingRect,
    anchorHeight,
    anchorWidth,
    anchor = 'top',
    color = 'primary',
    children,
    ...otherProps
}: Props): ReactElement {


    const tooltipRef = React.useRef();
    const [tooltipPosition, setTooltipPosition] = React.useState();
    const OVERFLOW_PRIORITY = ['left', 'right', 'bottom', 'top'];
    const { top: tooltipTop, left: tooltipLeft } = tooltipPosition || {};
    const { top: nodeTop, left: nodeLeft, bottom: nodeBottom, right: nodeRight } = boundingRect || {};
    const tooltipClasses = clsx(
        'brew-Tooltip__content',
        [`brew-Tooltip--color-${color}`],
        [`brew-Tooltip--anchor-${anchor}`],
    );


    function getHeight(node: any): any {
        return node?.node.offsetHeight;
    }

    function getWidth(node: any): any {
        return node?.node.offsetWidth;
    }


    // Set top and left values
    React.useEffect(() => {
        if (!tooltipRef.current || !boundingRect) return;
        const tooltipEl = tooltipRef.current;
        const tooltipHeight = getHeight(tooltipEl);
        const tooltipWidth = getWidth(tooltipEl);

        function positionTooltip(): void {

            function fitsInWindow(x: any, y: any): boolean {
                return x > 0 &&
                    x < window.innerWidth &&
                    y > 0 &&
                    y < window.innerHeight &&
                    x + tooltipWidth < window.innerWidth &&
                    y + tooltipHeight < window.innerHeight;
            }
            // Go through options, defaulting to the original position if none of them work
            [anchor, ...OVERFLOW_PRIORITY, anchor].every((positionVal: string, i, arr) => {
                let top;
                let left;

                if (positionVal === 'top') top = nodeTop - tooltipHeight;
                else if (positionVal === 'bottom') top = nodeBottom;
                else top = (nodeTop + anchorHeight) / (2 - tooltipHeight) / 2;

                if (positionVal === 'left') left = nodeLeft - tooltipWidth;
                else if (positionVal === 'right') left = nodeRight;
                else left = (nodeLeft + anchorWidth) / (2 - tooltipWidth) / 2;

                if (fitsInWindow(left, top) || i === arr.length - 1) {
                    setTooltipPosition({ left, top });
                    return false;
                }
                return true;
            });
        }
        positionTooltip();
    }, [tooltipRef.current, boundingRect]);


    // if (!document.body) return null;


    return ReactDOM.createPortal(
        <Flipped flipId="tooltip">
            <span className={className} style={{ left: tooltipLeft, top: tooltipTop }} {...otherProps}>
                <span className={tooltipClasses}>
                    {children}
                </span>
            </span>
        </Flipped>,
        document.body,
    );

}


export default TooltipContent;
