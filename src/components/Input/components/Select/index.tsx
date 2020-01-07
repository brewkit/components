import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from '../InputBase/types';

function Select(props: Props): ReactElement {
    const {
        className,
        customControl,
        children,
        onChange: onChangeProp,
        ...otherProps
    } = props;

    const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        if (onChangeProp) onChangeProp(event);
    };

    const classes = clsx(
        'brew-Select',
        className,
    );

    const DefaultCustomControl = (): ReactElement => (
        <div className="brew-CustomControl">
            <div className="brew-CustomControl__selection">
                <div className="brew-CustomControl__renderedSelection" />
            </div>
            <div className="brew-CustomControl__dropdown" />
        </div>
    );

    return (
        <InputBase
            as="select"
            className={classes}
            customControl={customControl || <DefaultCustomControl />}
            onChange={onChange}
            {...otherProps}
        >
            {children}
        </InputBase>
    );

}


export default Select;
