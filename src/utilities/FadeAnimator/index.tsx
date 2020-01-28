import React, { ReactElement } from 'react';
import { Props } from './types';
import {Flipped} from "react-flip-toolkit";


/**
 * The `ClickAwayListener` component.
 */
function FadeAnimator({
    flipId,
    children,
}: Props): ReactElement {


    function onAppear(el: any, index: any): void {
        setTimeout(() => {
            el.classList.add('brew-FadeAnimator--fadeIn');
            setTimeout(() => {
                el.style.opacity = 1;
                el.classList.remove('brew-FadeAnimator--fadeIn');
            }, 500);
        }, index * 50);
    }


    function onExit(el: any, index: any, removeElement: any): void {
        setTimeout(() => {
            el.classList.add('brew-FadeAnimator--fadeOut');
            setTimeout(removeElement, 500);
        }, index * 50);
    }


    return (
        <Flipped
            flipId={flipId}
            onAppear={onAppear}
            onExit={onExit}
        >
            {children}
        </Flipped>
    );


}


export default FadeAnimator;
