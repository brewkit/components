/* eslint-disable max-statements */

import React, { ReactElement } from 'react';
import clsx from 'clsx';
import InputBase from '../InputBase';
import { Props } from '../InputBase/types';
import DefaultCustomControl from './components/DefaultCustomControl';

const Select = (props: Props): ReactElement => {
    const {
        className,
        customControl,
        children,
        onChange: onChangeProp,
        value: valueProp,
        defaultValue: defaultValueProp,
        ...otherProps
    } = props;

    if (
        !React.Children.toArray(children).every((child: ReactElement) => child.type === 'option')
    ) throw new Error('All children of a select element must be options');

    // Since we need to set the value of the select input, we can't allow it to be uncontrolled
    const [value, setValue] = React.useState(valueProp || defaultValueProp || '');

    // It would help for us to know what the text was of the input, not just the value
    const [text, setText] = React.useState('');

    // If it's a controlled component, we need to keep up with the value
    React.useEffect(() => {
        if (valueProp || valueProp === '') setValue(valueProp);
    }, [valueProp]);

    // Get the text of the option based on the value
    React.useEffect(() => {
        const textVal = React.Children
            .toArray(children)
            .reduce((
                curr: string,
                option: ReactElement,
                index: number,
                arr: ReactElement[],
            ) => { // eslint-disable-line max-params
                const { value: optionValue, children: optionChildren } = option.props;
                if (optionValue === value ||
                (!optionValue && optionValue !== '' && optionChildren === value)) return optionChildren;
                if (!curr && index === arr.length - 1) return arr[0].props.children;

                return curr;
            }, '');
        setText(textVal);
    }, [value]);

    // pass a custom onChange event
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
        const { value: inputValue } = event.target;
        setValue(inputValue);
        if (onChangeProp) onChangeProp(event);
    };

    // handle the event where someone clicks one of our "fake" custom control options
    const handleOptionClick = (optionValue: string): void => {
        setValue(optionValue);
    };

    const classes = clsx(
        'brew-Select',
        className,
    );

    return (
        <InputBase
            as="select"
            className={classes}
            customControl={customControl || <DefaultCustomControl inputChildren={children} onSelectOption={handleOptionClick} text={text} />}
            onChange={onChange}
            value={value}
            {...otherProps}
        >
            {children}
        </InputBase>
    );

};


export default React.forwardRef(Select);
