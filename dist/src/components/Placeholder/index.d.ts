import { ReactElement } from 'react';
import PlaceholderGraphic from './components/PlaceholderGraphic';
import PlaceholderTitle from './components/PlaceholderTitle';
import PlaceholderContent from './components/PlaceholderContent';
import PlaceholderAction from './components/PlaceholderAction';
import { Props } from './types';
declare function Placeholder({ className, children, }: Props): ReactElement;
declare namespace Placeholder {
    var Graphic: typeof PlaceholderGraphic;
    var Title: typeof PlaceholderTitle;
    var Content: typeof PlaceholderContent;
    var Action: typeof PlaceholderAction;
}
export default Placeholder;
