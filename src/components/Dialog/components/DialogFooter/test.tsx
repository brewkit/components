import React from 'react';
import renderer from 'react-test-renderer';
import DialogFooter from './index';
import { shallow } from 'enzyme';

describe('DialogFooter', () => {
    it('matches the current snapshot', () => {
        const dialogFooter = renderer.create(<DialogFooter />).toJSON();
        expect(dialogFooter).toMatchSnapshot();
    });

    it('mounts with the right classes', () => {
        expect(shallow(<DialogFooter />).hasClass('brew-Dialog__footer')).toBe(true);
    });

    it('passes through class names correctly', () => {
        const testClassName = `class-${Math.floor(Math.random() * 1000).toString()}`;
        expect(shallow(<DialogFooter className={testClassName} />).hasClass(testClassName)).toBe(true);
    });

    it('accepts a children prop correctly', () => {
        const children = <span>children</span>;
        expect(shallow(<DialogFooter>{children}</DialogFooter>).contains(children)).toBe(true);
    });
});
