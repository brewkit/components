/* eslint-disable no-console */
import React, { ReactElement, RefObject } from 'react';
import { Bounding, Props } from './types';


/**
 * Fires an event when the child element is scrolled to
 */
function ScrollToListener({
    onScrollTo,
    children,
}: Props): ReactElement {


    const ref: RefObject<HTMLDivElement> = React.useRef(null);


    function checkPosition(position?: Bounding): boolean {
        console.log('hi');
        if (position?.top) return position.top - window.innerHeight <= 0;
        return false;
    }


    function handleScroll(event: Event): void {
        const target = ref.current?.parentNode?.firstElementChild;
        const targetPosition = target?.getBoundingClientRect();
        const isScrolledTo = checkPosition(targetPosition);
        console.log('target', target);
        console.log('target position', targetPosition);
        console.log('asdf', isScrolledTo);
        if (isScrolledTo && onScrollTo) onScrollTo(event);
    }


    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });

        return ((): void => {
            window.removeEventListener('scroll', handleScroll);
        });
    }, []);


    return (
        <React.Fragment>
            {children}
            <div ref={ref} style={{ display: 'none' }} />
        </React.Fragment>
    );


}


export default ScrollToListener;
