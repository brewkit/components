import React, { ReactElement, RefObject } from 'react';
import ReactDOM from 'react-dom';
import { Flipped, Flipper } from 'react-flip-toolkit';
import clsx from 'clsx';
import { Props } from './types';


function TooltipContent({
    className,
    boundingRect,
    anchorHeight,
    anchorWidth,
    anchor = 'top',
    color = 'primary',
    isVisible,
    children,
    style,
    ...otherProps
}: Props): ReactElement {


    const tooltipRef: RefObject<HTMLDivElement> = React.useRef(null);
    const [tooltipPosition, setTooltipPosition] = React.useState();
    const OVERFLOW_PRIORITY = ['left', 'right', 'bottom', 'top'];
    const { top: tooltipTop, left: tooltipLeft } = tooltipPosition || {};
    const { top: nodeTop, left: nodeLeft, bottom: nodeBottom, right: nodeRight } = boundingRect || {};
    const tooltipClasses = clsx(
        'brew-Tooltip__content',
        [`brew-Tooltip--color-${color}`],
        [`brew-Tooltip--anchor-${anchor}`],
    );


    // Set top and left values
    React.useEffect(() => {
        if (!tooltipRef.current || !boundingRect) return;
        const tooltipEl = Array.from(tooltipRef?.current?.parentNode?.children ?? []);
        const tooltipHeight: number = tooltipEl[0].clientHeight;
        const tooltipWidth: number = tooltipEl[0].clientWidth;
        const topValue: number = nodeTop;
        const leftValue: number = nodeLeft;
        let top = 0;
        let left = 0;

        function positionTooltip(): void {

            function fitsInWindow(leftVal: number, topVal: number): boolean {
                return leftVal > 0 &&
                    leftVal < window.innerWidth &&
                    topVal > 0 &&
                    topVal < window.innerHeight &&
                    leftVal + tooltipWidth < window.innerWidth &&
                    topVal + tooltipHeight < window.innerHeight;
            }

            // Go through options, defaulting to the original position if none of them work
            [anchor, ...OVERFLOW_PRIORITY, anchor].every((positionVal: string, i: number, arr) => {

                if (positionVal === 'top') top = nodeTop - tooltipHeight;
                else if (positionVal === 'bottom') top = nodeBottom;
                else top = (topValue + anchorHeight) / (2 - tooltipHeight) / 2;

                if (positionVal === 'left') left = nodeLeft - tooltipWidth;
                else if (positionVal === 'right') left = nodeRight;
                else left = (leftValue + anchorWidth) / (2 - tooltipWidth) / 2;

                if (fitsInWindow(left, top) || i === arr.length - 1) {
                    setTooltipPosition({ left, top });
                    return false;
                }
                return true;
            });
        }
        positionTooltip();
    }, [tooltipRef.current, boundingRect, anchorHeight]);


    // if (!document.body) return null;


    return ReactDOM.createPortal(
        <Flipper flipKey={isVisible}>
            <Flipped flipId="tooltip">
                <span
                    className={className}
                    ref={tooltipRef}
                    style={{ ...style, left: tooltipLeft, top: tooltipTop }}
                    {...otherProps}
                >
                    <span className={tooltipClasses}>
                        {children}
                        <div ref={tooltipRef} style={{ display: 'none' }} />
                    </span>
                </span>
            </Flipped>
        </Flipper>,
        document.body,
    );

}


export default TooltipContent;
