import React from 'react';
import ProgressCircular from './components/ProgressCircular';
import ProgressLinear from './components/ProgressLinear';
import { Props } from './components/ProgressLinear/types';
import { ProgressComponent } from './types';


/**
 * The `<Progress />` component primarily serves as an access point for the `<Progress.Circular />` and
 * `<Progress.Linear />` components.
 *
 * It can also be used directly in place of `<Progress.Linear />`.
 */
export const Progress: ProgressComponent = React.forwardRef(({
    ...otherProps
}: Props, ref: React.Ref<any>): React.ReactElement => (
    <ProgressLinear ref={ref} {...otherProps} />
));


Progress.Linear = ProgressLinear;
Progress.Circular = ProgressCircular;


Progress.displayName = 'Progress';


export default Progress;
