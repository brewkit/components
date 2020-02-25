import { StyledComponent } from '@components/types';
import { Colors, Sizes } from '@components/Progress/types';


export type Variants = (
    | 'indeterminate'
    | 'determinate'
    | 'static'
);


export interface Props extends StyledComponent {

    /**
     * The overall display of the progress indicator.
     * @default 'indeterminate'
     */
    variant?: Variants,

    /**
     * The color of the progress indicator.
     * @default 'primary'
     */
    color?: Colors,

    /**
     * The size of the progress indicator.
     * @default 'inherit'
     */
    size?: Sizes,

    /**
     * The value of the progress indicator for the determinate and static variants. Value between 0 and 100.
     */
    value?: number,

}
