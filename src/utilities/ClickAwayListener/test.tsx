import React from 'react';
import renderer from 'react-test-renderer';
import ClickAwayListener from './index';


it('renders correctly', () => {
    const tree = renderer
        .create((
            <ClickAwayListener onClickAway={(): boolean => true}>
                <div>foo</div>
            </ClickAwayListener>
        ))
        .toJSON();
    expect(tree).toMatchSnapshot();
});
