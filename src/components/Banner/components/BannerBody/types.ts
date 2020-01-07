import { Props as BannerProps } from '../../types';


export type Props = Omit<BannerProps,
    'variant'
    | 'bannerText'
    | 'color'
    | 'iconName'
>;
