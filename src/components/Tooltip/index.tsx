import React, {ReactElement, RefObject} from 'react';
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
    const ref: RefObject<HTMLDivElement> = React.useRef(null);
    const [isTooltipOpen, setIsTooltipOpen] = React.useState(isOpen);
    const [boundingRect, setBoundingRect] = React.useState();
    const [anchorHeight, setAnchorHeight] = React.useState();
    const [anchorWidth, setAnchorWidth] = React.useState();
    const wrapperClasses = clsx(
        'brew-Tooltip',
        className,
    );
    const contentClasses = clsx(
        'brew-Tooltip__wrapper',
        { 'brew-Tooltip--open': isTooltipOpen },
    );


    React.useEffect(() => {
        function onScroll(): void {
            const targets = Array.from(ref?.current?.parentNode?.children ?? []);
            if (typeof targets[0].getBoundingClientRect === 'function') {
                setBoundingRect(targets[0].getBoundingClientRect());
            }
        }
        onScroll();
        document.addEventListener('scroll', onScroll, true);
        window.addEventListener('resize', onScroll);

        return (): void => {
            document.removeEventListener('scroll', onScroll, true);
            window.removeEventListener('resize', onScroll);
        };
    }, []);


    function handleOnClick(): void {
        setIsTooltipOpen(!isTooltipOpen);
        const targets = Array.from(ref?.current?.parentNode?.children ?? []);
        setAnchorHeight(targets[0].clientHeight);
        setAnchorWidth(targets[0].clientWidth);
    }


    function handleMouseOver(): void {
        setIsTooltipOpen(!isTooltipOpen);
    }


    function handleMouseOut(): void {
        window.setTimeout(() => {
            setIsTooltipOpen(!isTooltipOpen);
        }, 150);
    }


    function handleTap(doShow: boolean): void {
        setIsTooltipOpen(doShow);
    }


    return (
        <div className={wrapperClasses} {...otherProps}>
            <ClickAwayListener onClickAway={(): void => setIsTooltipOpen(false)}>
                {React.cloneElement(React.Children.only(children), {
                    onClick: (triggerEvent === 'click') ? handleOnClick : undefined,
                    onMouseOut: (triggerEvent === 'hover') ? handleMouseOut : undefined,
                    onMouseOver: (triggerEvent === 'hover') ? handleMouseOver : undefined,
                    onTouchEnd: ((event: any) => event?.preventDefault()),
                    onTouchStart: () => handleTap(!isTooltipOpen),
                    ...otherChildProps,
                })}
                <div ref={ref} style={{ display: 'none' }} />
            </ClickAwayListener>
            <Flipper flipKey={isTooltipOpen}>
                <TooltipContent
                    anchorHeight={anchorHeight}
                    anchorWidth={anchorWidth}
                    boundingRect={boundingRect}
                    className={contentClasses}
                    {...otherProps}
                >
                    {content}
                </TooltipContent>
            </Flipper>
        </div>
    );

}


export default Tooltip;
