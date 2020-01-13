import { ReactElement } from 'react';
import BannerButton from './components/BannerButton';
import { Props } from './types';
declare function Banner({ children, className, color, iconName, description, isLoading, title, variant, ...otherProps }: Props): ReactElement;
declare namespace Banner {
    var Button: typeof BannerButton;
}
export default Banner;
