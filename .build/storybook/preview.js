import { addDecorator } from '@storybook/react';
import { withKnobs } from "@storybook/addon-knobs";
import StylesDecorator from './styles-decorator';
import './assets/styles/theme.css';


addDecorator(withKnobs);
addDecorator(StylesDecorator);
