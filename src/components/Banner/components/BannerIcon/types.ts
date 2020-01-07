import { Props as BannerProps } from '../../types';


export type iconName = string;
export type Props = Pick<BannerProps,
    'className'
    | 'isLoading'
    | 'iconName'
>;
