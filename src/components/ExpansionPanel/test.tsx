import React from 'react';
import renderer from 'react-test-renderer';
import ExpansionPanel from '@components/ExpansionPanel';


it('renders correctly', () => {
    const tree = renderer
        .create((
            <React.Fragment>
                <ExpansionPanel
                    details="bar"
                    isDisabled
                    summary="foo"
                />
                <ExpansionPanel
                    details="goodbye"
                    hasDefaultExpanded
                    summary="hello"
                />
            </React.Fragment>
        ))
        .toJSON();
    expect(tree).toMatchSnapshot();
});