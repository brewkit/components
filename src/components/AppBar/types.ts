import { Colors as GenericColors, StyledParentComponent } from '@components/types';


export type Colors = (
    | GenericColors
    | 'transparent'
    | string
);


export type Positions = (
    | 'fixed'
    | 'absolute'
    | 'sticky'
    | 'static'
    | 'relative'
    | string
);


export interface Props extends StyledParentComponent {

    /**
     * The color of the component. It supports those theme colors that make sense for this component.
     * @default 'transparent'
     */
    color?: Colors,

    /**
     * The positioning type. The behavior of the different options is described
     * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
     * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
     * @default 'fixed'
     */
    position?: Positions,

}
