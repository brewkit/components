import { StyledParentComponent, Colors as GenericColors } from '../../../types';
import { Sizes as IconSizes } from '../../types';


export type Colors = GenericColors | 'inherit';
export type Sizes = IconSizes;


export interface Props extends StyledParentComponent {

    /**
     * Determines the color of the rendered Icon.
     * @default 'inherit'
     */
    color?: Colors,

    /**
     * If set, forces the icon to render at the specified size.
     */
    size?: Sizes,

    /**
     * Applies a color attribute to the SVG element.
     */
    htmlColor?: string,

    /**
     * The shape-rendering attribute. The behavior of the different options is described on the MDN Web Docs. If you
     * are having issues with blurry icons you should investigate this property.
     */
    shapeRendering?: string,

    /**
     * Provides a human-readable title for the element that contains it. https://www.w3.org/TR/SVG-access/#Equivalent
     */
    titleAccess?: string,

    /**
     * Allows you to redefine what the coordinates without units mean inside an SVG element. For example, if the SVG
     * element is 500 (width) by 200 (height), and you pass viewBox="0 0 50 20", this means that the coordinates
     * inside the SVG will go from the top left corner (0,0) to bottom right (50,20) and each unit will be worth 10px.
     * @default '0 0 24 24'
     */
    viewBox?: string,

}
