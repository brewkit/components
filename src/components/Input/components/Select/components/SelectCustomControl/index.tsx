import React, { ReactElement } from 'react';
import clsx from 'clsx';
import Icon from '../../../../../Icon';

function CustomControl(props: any): ReactElement {
    const { placeholder, value, defaultValue, children, className } = props;
    const [currentValue, setCurrentValue] = React.useState(null);
    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
        setCurrentValue(value || defaultValue || placeholder || '');
    }, []);

    const options = React.Children.toArray(children).filter((child: ReactElement) => child.type === 'option');
    console.log('children', options);

    const handleClick = (): void => {
        setIsActive((current: boolean) => !current);
    };

    const wrapperClasses = clsx(
        'brew-CustomControl',
        { 'brew-CustomControl--isActive': Boolean(isActive) },
        className,
    );

    const getOptionClassName = (child) => {
        console.log(child);
        const { props: childProps } = child;
        const { disabled } = childProps;

        /*
         * { 'brew-CustomControl__optionItem--selected': currentValue === value },
         */
        return clsx(
            'brew-CustomControl__optionItem',
            { 'brew-CustomControl__optionItem--disabled': Boolean(disabled) },
        );
    };

    return (
        <div className={wrapperClasses} onClick={handleClick}>
            <div className="brew-CustomControl__input">
                <div className="brew-CustomControl__value">{currentValue}</div>
                <Icon className="brew-CustomControl__icon">keyboard_arrow_down</Icon>
            </div>
            <div className="brew-CustomControl__dropdown">
                <ul className="brew-CustomControl__optionList">
                    {React.Children.map(children, (child: ReactElement) => (
                        <li className={getOptionClassName(child)}>{child.props.children}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default CustomControl;
