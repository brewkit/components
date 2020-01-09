import React, { ReactElement, ReactNode } from 'react';
import clsx from 'clsx';
import Icon from '../../../../../Icon';

/*
 * This is the code I reduced by one eslint-disable-line rule
 * const CustomControlOption = ({
 *     value: optionValue,
 *     text,
 *     onClick,
 * }: {
 *     value: string,
 *     text: string,
 *     onClick: (string) => any,
 * }): ReactElement => {
 */

/*
 *     const handleClick = (): void => {
 *         if (onClick) onClick(optionValue);
 *     };
 */

/*
 *     return (
 *         <li
 *             className="brew-CustomControl__option"
 *             onClick={handleClick}
 *         >
 *             {text}
 *         </li>
 *     );
 * };
 */

/*
 * our default custom control is a bit of a doozy here.  But that's what
 * we get for recreating select2 for react™©®
 */
const DefaultCustomControl = ({
    text,
    inputChildren,
    onSelectOption,
}: {
    text: string,
    inputChildren: ReactNode,
    onSelectOption: (string) => any,
}): ReactElement => {
    const [isDropDownVisible, setIsDropdownVisible] = React.useState(false);

    const handleClickCustomSelection = (): void => {
        setIsDropdownVisible((current: boolean) => !current);
    };

    const handleCustomOptionClick = (value: string): void => {
        setIsDropdownVisible(false);
        if (onSelectOption) onSelectOption(value);
    };

    return (
        <div className="brew-CustomControl">
            <div className="brew-CustomControl__input" onClick={handleClickCustomSelection}>
                <div className="brew-CustomControl__renderedSelection">{text}</div>
                <Icon className="brew-CustomControl__icon">keyboard_arrow_down</Icon>
            </div>
            {isDropDownVisible && (
                <div className="brew-CustomControl__dropdown">
                    <ul className="brew-CustomControl__options">
                        {React.Children.map(inputChildren, (child: ReactElement) => (
                            <li
                                className={clsx(
                                    'brew-CustomControl__option',
                                    { 'brew-CustomControl__option--selected': text === child.props.children },
                                    child.props.className,
                                )}
                                onClick={(): void => { // eslint-disable-line react/jsx-no-bind
                                    handleCustomOptionClick(child.props.value || child.props.children);
                                }}
                            >{child.props.children}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );

};

export default DefaultCustomControl;
