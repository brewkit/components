import React from 'react';
import renderer from 'react-test-renderer';
import Card from '@components/Card';


it('renders correctly', () => {
    const tree = renderer
        .create((
            <Card>Default</Card>
        ))
        .toJSON();
    expect(tree).toMatchSnapshot();
});
