import React, { ReactElement } from 'react';
// import clsx from 'clsx';
import { Props } from './types';


function RadioGroup({
    className,
    inputLabel,
    inputLabelClassName,
    children,
}: Props): ReactElement {


    return (
        <div className={className}>
            <label className={inputLabelClassName}>{inputLabel}</label>
            <div>
                {React.Children
                    .toArray(children)
                    .map(child => child)
                }
            </div>
        </div>
    );

}


export default RadioGroup;
