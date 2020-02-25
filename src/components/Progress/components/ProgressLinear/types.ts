import { StyledComponent } from '@components/types';
import { Colors, Sizes } from '@components/Progress/types';


export type Variants = (
    | 'indeterminate'
    | 'determinate'
    | 'buffer'
    | 'query'
);


export interface Props extends StyledComponent {

    /**
     * The overall display of the progress indicator.
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

    /**
     * The value of the progress indicator for the determinate and static variants. Value between 0 and 100.
     */
    value?: number,

    /**
     * The value of the buffer indicator for the buffer variant. Value between 0 and 100.
     */
    bufferValue?: number,

}
