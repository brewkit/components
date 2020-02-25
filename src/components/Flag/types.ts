import { StyledParentComponent, Colors as GenericColors } from '@components/types';


export type Colors = GenericColors;


export interface Props extends StyledParentComponent {

    /**
     * The color of the label.
     * @default 'info'
     */
    color?: Colors,

}
