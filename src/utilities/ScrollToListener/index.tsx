import React, { ReactElement, RefObject } from 'react';
import { Props } from './types';


/**
 * Fires an function passed through onScrollTo when the child element is scrolled to
 */
function ScrollToListener({
    children,
    onScrollTo,
    rootElement = null,
    rootMargin = '0px 0px 0px 0px',
    rootThreshold = 0.01,
    willListen = false,
}: Props): ReactElement {


    const ref: RefObject<HTMLDivElement> = React.useRef(null);


    function handleScroll(entries: any, observer: any): void {


        const [entry] = entries;
        const lastThreshold = observer.thresholds[observer.thresholds.length - 1];


        if (entry.intersectionRatio > 0) onScrollTo();
        if (!willListen && entry.intersectionRatio >= lastThreshold) observer.disconnect();


    }


    React.useEffect(() => {


        const findRootElement = rootElement ? document.querySelector(rootElement) : null;

        const target = ref.current?.previousElementSibling;

        const observer = new IntersectionObserver(handleScroll, { root: findRootElement,
            rootMargin,
            threshold: rootThreshold });


        if (target) observer.observe(target);


        return ((): void => {
            if (target) observer.unobserve(target);
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
