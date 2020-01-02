import React, { ReactElement } from 'react';
import { Props } from './types';


function RadioGroup({
    name,
    defaultValue,
    onChange,
    children,
}: Props): ReactElement {


    return (
            <div className="brew-RadioGroup">
                {React.Children.map(children, (child) => {
                    return React.cloneElement(child, {
                        name: name,
                        defaultValue: defaultValue,
                        onChange: onChange,
                        ...child.props,
                    });
                })}
            </div>
    );

}


export default RadioGroup;
