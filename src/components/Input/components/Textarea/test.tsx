import React from 'react';
import { shallow, mount } from 'enzyme';
import Textarea from './index';
import InputBase from '../InputBase';

describe('Textarea', () => {
    it('mounts correctly and has correct class', () => {
        expect(shallow(<Textarea />).hasClass('brew-Input--textarea')).toBe(true);
        expect(mount(<Textarea />).find('textarea').length).toBe(1);
    });

    it('uses InputBase', () => {
        expect(mount(<Textarea />).find(InputBase).length).toBe(1);
    });

    it('properly passes through the className', () => {
        const testClass = 'class-' + Math.floor(Math.random() * 1000);
        expect(shallow(<Textarea className={testClass} />).hasClass(testClass)).toBe(true);
    });

    it('correctly adds the before prop', () => {
        const Before = () => <div>before</div>;
        expect(mount(<Textarea before={<Before />} />).find(Before).length).toEqual(1);
    });

    it('correctly adds the after prop', () => {
        const After = () => <div>after</div>;
        expect(mount(<Textarea after={<After />} />).find(After).length).toEqual(1);
    });
});