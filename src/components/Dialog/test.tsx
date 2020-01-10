import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Dialog from './index';

describe('Dialog', () => {

    it('renders correctly', () => {
        const tree = renderer
            .create(<Dialog />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('has the right classes applied', () => {
        const dialog = shallow(<Dialog isOpen />);
        expect(dialog.exists('.brew-Dialog')).toBe(true);
        const elements = [
            'content', 
            'background', 
            'header', 
            'closeIcon', 
            'body', 
            'footer', 
            'actionButton', 
            'actionButton--confirm', 
            'actionButton--cancel',
        ];
        elements.forEach((elementName) => {
            expect(dialog.exists(`.brew-Dialog__${elementName}`)).toBe(true);
        });
    });

    it('applies the correct class when open', () => {
        const dialog = shallow(<Dialog isOpen />);
        expect(dialog.exists('.brew-Dialog--isOpen')).toBe(true);
    });

    it('accepts a custom className prop', () => {
        const customClass = `class-${Math.floor(Math.random() * 1000)}`;
        expect(shallow(<Dialog className={customClass} isOpen />).exists(`.${customClass}`)).toBe(true);
    });

    it('changes the confirm button text when the confirmText prop is passed in', () => {
        const confirmText = 'definitely';
        const dialog = shallow(<Dialog confirmText={confirmText} isOpen />);
        expect(dialog.find('.brew-Dialog__actionButton--confirm').render().text()).toEqual(confirmText);
    });

    it('changes the cancel text when the cancelText prop is passed in', () => {
        const cancelText = 'absolutely not';
        const dialog = shallow(<Dialog cancelText={cancelText} isOpen />);
        expect(dialog.find('.brew-Dialog__actionButton--cancel').render().text()).toEqual(cancelText);
    });

    it('passes children into the body', () => {
        const Children = () => <span>body</span>
        const dialog = shallow(<Dialog isOpen><Children /></Dialog>);
        expect(dialog.find('.brew-Dialog__body').render().text()).toEqual('body');
    });

    it('passes through a custom close icon through the closeIcon prop', () => {
        const CloseIcon = () => <span>close icon</span>;
        const dialog = shallow(<Dialog isOpen closeIcon={<CloseIcon />} />);
        expect(dialog.find('.brew-Dialog__header').contains(<CloseIcon />)).toBe(true);
    });

    it('applies the correct className when the color prop is added', () => {
        const dialog = shallow(<Dialog color="danger" isOpen />);
        expect(dialog.exists('.brew-Dialog--color-danger')).toBe(true);
    });

    it('adds a title when the title prop is passed through', () => {
        const title = 'modal title';
        const dialog = shallow(<Dialog title={title} isOpen />)
        expect(dialog.find('.brew-Dialog__title').render().text()).toEqual(title);
    });

    it('adds a custom footer when the customFooter prop is present', () => {
        const CustomFooter = () => <span>custom footer</span>;
        const dialog = shallow(<Dialog customFooter={<CustomFooter />} isOpen />);
        expect(dialog.find('.brew-Dialog__footer').contains(<CustomFooter />)).toBe(true);
    });

    it('removes the footer when the hideFooter prop is true', () => {
        const dialog = shallow(<Dialog isOpen hideFooter />);
        expect(dialog.exists('.brew-Dialog__footer')).toBe(false);
    });

    it('removes the cancel button for an "alert" variant', () => {
        const dialog = shallow(<Dialog variant="alert" isOpen />);
        expect(dialog.exists('.brew-Dialog__actionButton--cancel')).toBe(false);
    });

});