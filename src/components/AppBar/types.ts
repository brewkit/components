import { ElementType, Colors as GenericColors, StyledParentComponent } from '@components/types';


/**
 * Export the consts for easier management of the available options within storybook
 */
export const colors = ['transparent', ...GenericColors];
export const positions = ['fixed', 'absolute', 'sticky', 'static', 'relative'];


/**
 * Convert and export the consts to usable types
 */
export type Colors = ElementType<typeof colors>;
export type Positions = ElementType<typeof positions>;


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
