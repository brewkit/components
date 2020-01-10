import { ReactElement } from 'react';
import { Props } from './types';
import CardBody from './components/CardBody';
import CardHeader from './components/CardHeader';
import CardTitle from './components/CardTitle';
declare function Card({ hasBorder, className, children, ...otherProps }: Props): ReactElement;
declare namespace Card {
    var Body: typeof CardBody;
    var Header: typeof CardHeader;
    var Title: typeof CardTitle;
}
export default Card;
