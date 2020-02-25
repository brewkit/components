import React from 'react';
import renderer from 'react-test-renderer';
import Button from '@components/Button';
import Icon from '@components/Icon';


it('renders correctly', () => {
    const tree = renderer
        .create(<Button>Foo</Button>)
        .toJSON();
    expect(tree).toMatchSnapshot();
});


it('renders correctly with various props', () => {
    const tree = renderer
        .create((
            <React.Fragment>
                <Button startIcon={<Icon>arrow_back</Icon>}>Go Back</Button>
                <Button variant="standard">Click me!</Button>
                <Button variant="text">Click me!</Button>
                <Button endIcon={<Icon>add_circle_outline</Icon>}>Add Account</Button>
                <Button endIcon={<Icon>add_circle_outline</Icon>} />
                <Button isLoading variant="standard">Click me!</Button>
                <Button isFluid variant="standard">Click me!</Button>
                <Button isCompact variant="standard">Click me!</Button>
                <Button isDisabled variant="standard">Click me!</Button>
            </React.Fragment>
        ))
        .toJSON();
    expect(tree).toMatchSnapshot();
});
