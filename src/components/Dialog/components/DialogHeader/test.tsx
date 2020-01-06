import React from 'react';
import renderer from 'react-test-renderer';
import DialogHeader from './index';
import { shallow } from 'enzyme';

describe('DialogHeader', () => {
    it('matches the current snapshot', () => {
        const dialogHeader = renderer.create(<DialogHeader />).toJSON();
        expect(dialogHeader).toMatchSnapshot();
    });

    it('mounts with the right classes', () => {
        expect(shallow(<DialogHeader />).hasClass('brew-Dialog__header')).toBe(true);
    });

    it('passes through class names correctly', () => {
        const testClassName = `class-${Math.floor(Math.random() * 1000).toString()}`;
        expect(shallow(<DialogHeader className={testClassName} />).hasClass(testClassName)).toBe(true);
    });

    it('accepts a children prop correctly', () => {
        const children = <span>children</span>;
        expect(shallow(<DialogHeader>{children}</DialogHeader>).contains(children)).toBe(true);
    });
});
