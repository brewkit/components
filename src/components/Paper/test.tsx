import React from 'react';
import renderer from 'react-test-renderer';
import Paper from './index';


describe('Paper', () => {

    it('renders correctly with defaults', () => {
        const tree = renderer
            .create(<Paper>Foo</Paper>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('renders correctly with properties', () => {
        const tree = renderer
            .create((
                <Paper
                    className="foo-bar"
                    component="span"
                    elevation={2}
                    isRounded={false}
                    style={{ width: '100px' }}
                    variant="outlined"
                >
                    Foo
                </Paper>
            ))
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

});
