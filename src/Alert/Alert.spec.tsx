import React from 'react';
import { render } from '../testUtils'
import Alert, { BkAlertProps } from './Alert';

const alert = (props: BkAlertProps) => render(<Alert {...props} />)


describe('<Alert />', () => {
    test('check for <AlertTitle /> MUI classname if title prop is present', () => {
        const renderedAlert = alert({ title: 'Hello world'});
        const element = renderedAlert.container.querySelector('.MuiAlertTitle-root')
        expect(element).toBeTruthy()
        expect(element?.innerHTML).toBe('Hello world');
    })
});
