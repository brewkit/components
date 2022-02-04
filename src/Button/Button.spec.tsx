import React from 'react';
import { render } from '../testUtils';
import Button, { BkButtonProps } from './Button';

const button = ({ children, ...props }: BkButtonProps) => (
    render(<Button {...props}>{children}</Button>)
);

describe('<Button />', () => {

  test('ensure Typography component wraps children prop with default paragraph node', () => {
      const renderedButton = button({ children: 'Submit' }).getByText('Submit')
      expect(renderedButton.nodeName).toBe('P')
      expect(renderedButton.innerHTML).toBe('Submit')
  });
  
  test('render a MuiCircularProgress inside Button when loading prop is set', () => {
      const renderedButton = button({ loading: true })
      expect(renderedButton.container.querySelector('.MuiCircularProgress-root')).toBeTruthy()
  });

    test('change typography prop to caption so it renders a span instead of paragraph', () => {
      const renderedButton = button({ 
          children: 'Submit', 
          TypographyProps: { variant: 'caption' } 
      })
        .getByText('Submit')
      expect(renderedButton.nodeName).toBe('SPAN')
  }); 

      test('ensure 1 MuiCircularProgress class instance loads when layered={false} is provided to CircularProgressProps', () => {
      const renderedButton = button({ 
          children: 'Submit',
           loading: true, 
           CircularProgressProps: { layered: false } 
    })
      const classNames  = renderedButton.getAllByRole('progressbar')
      expect(classNames).toHaveLength(1)
  }); 

  test.todo('cover startIcon when proper styles are finished')
  test.todo('cover endIcon when proper styles are finished')
});
