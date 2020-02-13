import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import SnackbarProvider from './index';
import SnackbarWrapper from './components/SnackbarWrapper';
import { SnackbarContext } from './context';


const CreateSnackbar = (): any => {
    const snackbar = React.useContext(SnackbarContext);

    if (snackbar.enqueue) snackbar.enqueue({ color: 'primary', content: 'test', position: 'topLeft' });
    if (snackbar.enqueue) snackbar.enqueue({ color: 'primary', content: 'test', position: 'topCenter' });
    if (snackbar.enqueue) snackbar.enqueue({ color: 'primary', content: 'test', position: 'topRight' });
    if (snackbar.enqueue) snackbar.enqueue({ color: 'primary', content: 'test', position: 'bottomLeft' });

    return <div>foo</div>;
};


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


    it('Sets up Snackbar Containers', () => {
        const snackbar = shallow(<SnackbarProvider><div>foo</div></SnackbarProvider>);

        expect(snackbar.find(SnackbarWrapper).dive()
            .children()).toHaveLength(8);
    });


    it('Creates a snackbar in the correct container', () => {
        const snackbar = mount(<SnackbarProvider><CreateSnackbar /></SnackbarProvider>);

        expect(snackbar.exists('.brew-SnackbarItem--topLeft')).toBe(true);
        expect(snackbar.exists('.brew-SnackbarItem--topCenter')).toBe(true);
        expect(snackbar.exists('.brew-SnackbarItem--topRight')).toBe(true);
        expect(snackbar.exists('.brew-SnackbarItem--bottomLeft')).toBe(false);
    });


});
