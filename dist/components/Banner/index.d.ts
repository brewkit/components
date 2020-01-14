import { ReactElement } from 'react';
import BannerIcon from './components/BannerIcon';
import BannerBody from './components/BannerBody';
import BannerButton from './components/BannerButton';
import BannerInfo from './components/BannerInfo';
import BannerTitle from './components/BannerTitle';
import { Props } from './types';
declare function Banner({ children, className, color, iconName, description, isLoading, title, variant, ...otherProps }: Props): ReactElement;
declare namespace Banner {
    var Body: typeof BannerBody;
    var Button: typeof BannerButton;
    var Icon: typeof BannerIcon;
    var Info: typeof BannerInfo;
    var Title: typeof BannerTitle;
}
export default Banner;
