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
    anchor = 'top',
    color = 'primary',
    children,
    ...otherProps
}: Props): ReactElement {


    const [isTooltipOpen, setIsTooltipOpen] = React.useState(isOpen);
    const wrapperClasses = clsx(
        'brew-Tooltip',
        className,
    );
    const contentClasses = clsx(
        'brew-Tooltip__content',
        { 'brew-Tooltip--open': isTooltipOpen },
    );


    function handleRef(node: ReactElement): ReactElement {
        return node;
    }


    function handleTooltip(): void {
        setIsTooltipOpen(!isTooltipOpen);
    }


    return (
        <div className={wrapperClasses} {...otherProps}>
            <Flipper flipKey={isTooltipOpen}>
                <div>
                    {React.Children.map(children, (child: ReactElement) => React.cloneElement(child, {
                        onClick: (triggerEvent === 'click') ? handleTooltip : undefined,
                        onMouseOut: (triggerEvent === 'hover') ? handleTooltip : undefined,
                        onMouseOver: (triggerEvent === 'hover') ? handleTooltip : undefined,
                        ref: handleRef,
                    }))}
                </div>
                <TooltipContent
                    anchor={anchor}
                    className={contentClasses}
                    color={color}
                >
                    {content}
                </TooltipContent>
            </Flipper>
        </div>
    );

}


export default Tooltip;
