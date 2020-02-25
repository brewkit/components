import { create } from '@storybook/theming';
import logo from '../storybook/assets/images/brewkit-logo.png';


export default create({
    base: 'light',
    fontBase: '"Roboto", sans-serif',
    brandTitle: 'Brewkit',
    brandImage: logo,
});
