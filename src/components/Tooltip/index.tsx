import React, { ReactElement } from 'react';
import { Flipper } from 'react-flip-toolkit';
import clsx from 'clsx';
import ClickAwayListener from '../../utilities/ClickAwayListener';
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
    const [tooltipRef] = React.useState(null);
    const wrapperClasses = clsx(
        'brew-Tooltip',
        className,
    );
    const contentClasses = clsx(
        'brew-Tooltip__wrapper',
        { 'brew-Tooltip--open': isTooltipOpen },
    );


    function handleTooltip(): void {
        setIsTooltipOpen(!isTooltipOpen);
    }


    return (
        <div className={wrapperClasses} {...otherProps}>
            <Flipper flipKey={isTooltipOpen}>
                <ClickAwayListener onClickAway={(): void => setIsTooltipOpen(false)}>
                    {React.cloneElement(React.Children.only(children), {
                        onClick: (triggerEvent === 'click') ? handleTooltip : undefined,
                        onMouseOut: (triggerEvent === 'hover') ? handleTooltip : undefined,
                        onMouseOver: (triggerEvent === 'hover') ? handleTooltip : undefined,
                        ...otherChildProps,
                    })}
                </ClickAwayListener>
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
