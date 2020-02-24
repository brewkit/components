import { addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import StylesDecorator from './styles-decorator';
import './assets/css/theme.css';


addDecorator(withKnobs);
addDecorator(StylesDecorator);
