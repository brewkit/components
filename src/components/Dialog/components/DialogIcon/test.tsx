import React from 'react';
import renderer from 'react-test-renderer';
import DialogIcon from './index';
import { shallow } from 'enzyme';

describe('DialogIcon', () => {
    it('matches the current snapshot', () => {
        const dialogIcon = renderer.create(<DialogIcon>icon</DialogIcon>).toJSON();
        expect(dialogIcon).toMatchSnapshot();
    });

    it('mounts with the right classes', () => {
        expect(shallow(<DialogIcon>icon</DialogIcon>).hasClass('brew-Dialog__icon')).toBe(true);
    });

    it('passes through class names correctly', () => {
        const testClassName = `class-${Math.floor(Math.random() * 1000).toString()}`;
        expect(shallow(<DialogIcon className={testClassName}>icon</DialogIcon>).hasClass(testClassName)).toBe(true);
    });

    it('accepts a children prop correctly', () => {
        const children = 'children';
        expect(shallow(<DialogIcon>{children}</DialogIcon>).contains(children)).toBe(true);
    });
});
