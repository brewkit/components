import React, { ReactElement, Ref, RefObject, RefForwardingComponent } from 'react';
import { Props } from './types';


/**
 * Fires an function passed through onScrollTo when the child element is scrolled to
 */
const ScrollToListener = React.forwardRef(({
    applyToLastChild = false,
    children,
    onScrollTo,
    rootMargin = '0px 0px 0px 0px',
    rootThreshold = 0.01,
    willListen = false,
}: Props, ref: Ref<HTMLElement>) => {

    const scrollToRef = React.createRef<RefObject<HTMLElement>>();

    function handleScroll(entries: any, observer: any): void {


        const [entry] = entries;
        const lastThreshold = observer.thresholds[observer.thresholds.length - 1];

        if (entry.intersectionRatio > 0) onScrollTo();
        if (!willListen && entry.intersectionRatio >= lastThreshold) observer.disconnect();


    }


    React.useEffect(() => {

        console.log('This is the rootElement being passed to in <ScrollToListener>', scrollToRef.current ?? null);
        const target = applyToLastChild ? scrollToRef.current?.previousElementSibling : scrollToRef.current?.nextElementSibling;

        const observer = new IntersectionObserver(handleScroll, {
            root: ref.current ?? null,
            rootMargin,
            threshold: rootThreshold,
        });

        if (target) observer.observe(target);

        return ((): void => {
            if (target) observer.unobserve(target);
        });


    }, [React.Children.toArray(children).length]);


    const componentStructure = (): ReactElement => {


        if (applyToLastChild) return (
            <React.Fragment>
                {children}
                <span ref={scrollToRef} style={{ display: 'none' }} />
            </React.Fragment>
        );


        return (
            <React.Fragment>
                <span ref={scrollToRef} style={{ display: 'none' }} />
                {children}
            </React.Fragment>
        );
    };


    return componentStructure();


});


export default ScrollToListener;
