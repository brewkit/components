import React, { ReactElement } from 'react';
import ReactDOM from 'react-dom';
import { Flipped } from 'react-flip-toolkit';
import clsx from 'clsx';
import Typography from '../../../Typography';
import { Props } from './types';


function TooltipContent({
    className,
    anchor = 'top',
    color = 'primary',
    children,
    ...otherProps
}: Props): ReactElement {


    const tooltipRef = React.useRef();
    const tooltipClasses = clsx(
        [`brew-Tooltip--color-${color}`],
        [`brew-Tooltip--anchor-${anchor}`],
        className,
    );


    return ReactDOM.createPortal(
        <Flipped flipId="tooltip">
            <span
                className={tooltipClasses}
                ref={tooltipRef}
                {...otherProps}
            >
                <Typography as="span">{children}</Typography>
            </span>
        </Flipped>,
        document.body,
    );

}


export default TooltipContent;
