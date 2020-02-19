import React from 'react';
import renderer from 'react-test-renderer';
import SnackbarProvider, { useSnackbar } from './index';


describe('Snackbar', () => {


    it('renders correctly', () => {
        const tree = renderer
            .create((
                <SnackbarProvider>
                    <div>foo</div>
                </SnackbarProvider>
            ))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });


});
