import React, { ReactElement, RefObject } from 'react';
import { Props } from './types';


/**
 * The `ClickAwayListener` component.
 */
function ClickAwayListener({
    onClickAway,
    children,
}: Props): ReactElement {


    const ref: RefObject<HTMLInputElement> = React.useRef(null);


    /**
     * Check to see if the click originated from a descendent of the wrapped content.
     */
    function handleClick(event: Event): void {
        const target = ref?.current?.parentNode?.firstChild;
        const isContained = target.contains(event.target as Node);
        if (!isContained) onClickAway();
    }


    React.useEffect(() => {
        document.addEventListener('click', handleClick);
        return ((): void => {
            document.removeEventListener('click', handleClick);
        });
    }, []);


    return (
        <React.Fragment>
            {children}
            <div ref={ref} style={{ display: 'none' }} />
        </React.Fragment>
    );


}


export default ClickAwayListener;
