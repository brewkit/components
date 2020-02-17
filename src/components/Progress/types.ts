import { Colors as GenericColors, StyledParentComponent } from '@components/types';


export type Variants = 'circular' | 'horizontal';
export type Colors = GenericColors;
export type Sizes = 'small' | 'medium' | 'large' | 'inherit';


export interface Props extends StyledParentComponent {

    /**
     * The overall display of the Progress indicator.
     */
    variant?: Variants,

    /**
     * The color of the progress indicator.
     */
    color?: Colors,

    /**
     * The size of the progress indicator.
     */
    size?: Sizes,

}
