import React, { ReactElement } from 'react';
import { Flipper } from 'react-flip-toolkit';
import clsx from 'clsx';
import TooltipContent from './components/TooltipContent';
import { Props } from './types';


function Tooltip({
    className,
    triggerEvent = 'click',
    content,
    isOpen = false,
    children,
    ...otherProps
}: Props): ReactElement {


    const { ...otherChildProps } = children || {};
    const [isTooltipOpen, setIsTooltipOpen] = React.useState(isOpen);
    const [tooltipRef, setTooltipRef] = React.useState(null);
    const wrapperClasses = clsx(
        'brew-Tooltip',
        className,
    );
    const contentClasses = clsx(
        'brew-Tooltip__wrapper',
        { 'brew-Tooltip--open': isTooltipOpen },
    );


    function handleRef(node) {
        console.log('handleRef', node);
        setTooltipRef(node?.node);
        return node;
    }


    function handleTooltip(): void {
        setIsTooltipOpen(!isTooltipOpen);
    }


    return (
        <div className={wrapperClasses} {...otherProps}>
            <Flipper flipKey={isTooltipOpen}>
                <div>
                    {React.cloneElement(React.Children.only(children), {
                        onClick: (triggerEvent === 'click') ? handleTooltip : undefined,
                        onMouseOut: (triggerEvent === 'hover') ? handleTooltip : undefined,
                        onMouseOver: (triggerEvent === 'hover') ? handleTooltip : undefined,
                        ref: handleRef,
                        ...otherChildProps,
                    })}
                </div>
                <TooltipContent
                    className={contentClasses}
                    controllerRef={tooltipRef}
                    {...otherProps}
                >
                    {content}
                </TooltipContent>
            </Flipper>
        </div>
    );

}


export default Tooltip;
