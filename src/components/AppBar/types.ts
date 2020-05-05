import { StyledParentComponent } from '@components/types';


export interface Props extends StyledParentComponent {


    /**
     * The position in which the element is anchored from by default, responsiveness is manipulated by CSS styling.
     * @default 'left'
     */
    anchorFrom?: 'top' | 'right' | 'bottom' | 'left',


    /**
     * Shadow depth, corresponds to `dp` in Material Design. It accepts values between 0 and 24 inclusive.
     * Will be applied to the `<Paper />` component.
     * @default '1'
     */
    elevation?: number,


    /**
     * The positioning type. The behavior of the different options is described in the
     * [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/CSS/position).
     * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
     * @default 'fixed'
     */
    position?: 'absolute' | 'fixed' | 'relative' | 'static' | 'sticky',


    /**
     * Will be applied to the root `<Paper />` component.
     * @default 'elevation'
     */
    variant?: 'elevation' | 'outlined',


}
