import React, { ReactElement } from 'react';
import clsx from 'clsx';
import PlaceholderGraphic from './components/PlaceholderGraphic';
import PlaceholderTitle from './components/PlaceholderTitle';
import PlaceholderContent from './components/PlaceholderContent';
import PlaceholderPrimaryAction from './components/PlaceholderPrimaryAction';
import PlaceholderSecondaryAction from './components/PlaceholderSecondaryAction';
import { Props } from './types';


function Placeholder({
    className,
    children,
}: Props): ReactElement {


    const placeholderClasses = clsx(
        'brew-Placeholder',
        className,
    );


    return (
        <div className={placeholderClasses}>
            {children}
        </div>
    );


}


Placeholder.Graphic = PlaceholderGraphic;
Placeholder.Title = PlaceholderTitle;
Placeholder.Content = PlaceholderContent;
Placeholder.PrimaryAction = PlaceholderPrimaryAction;
Placeholder.SecondaryAction = PlaceholderSecondaryAction;


export default Placeholder;
