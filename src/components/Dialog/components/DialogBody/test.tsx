import React from 'react';
import renderer from 'react-test-renderer';
import DialogBody from './index';
import { shallow } from 'enzyme';

describe('DialogBody', () => {
    it('matches the current snapshot', () => {
        const dialogBody = renderer.create(<DialogBody />).toJSON();
        expect(dialogBody).toMatchSnapshot();
    });

    it('mounts with the right classes', () => {
        expect(shallow(<DialogBody />).hasClass('brew-Dialog__body')).toBe(true);
    });

    it('passes through class names correctly', () => {
        const testClassName = `class-${Math.floor(Math.random() * 1000).toString()}`;
        expect(shallow(<DialogBody className={testClassName} />).hasClass(testClassName)).toBe(true);
    });

    it('accepts a children prop correctly', () => {
        const children = <span>children</span>;
        expect(shallow(<DialogBody>{children}</DialogBody>).contains(children)).toBe(true);
    });
});
