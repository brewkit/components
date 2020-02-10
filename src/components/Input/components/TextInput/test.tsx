import React from 'react';
import TextInput from './index';
import InputBase from '../InputBase';
import { shallow, mount } from 'enzyme';

describe('TextInput', () => {
    it('renders without hasError', () => {
        expect(shallow(<TextInput />).dive()
            .find('input').length).toBe(1);
    });

    it('uses InputBase', () => {
        expect(mount(<TextInput />).find(InputBase).length).toBe(1);
    });

    it('properly passes through an input type', () => {
        expect(shallow(<TextInput type="text" />).dive()
            .find('input')
            .prop('type')).toEqual('text');
        expect(shallow(<TextInput type="email" />).dive()
            .find('input')
            .prop('type')).toEqual('email');
    });

    it('has the correct class names', () => {
        expect(shallow(<TextInput />).is('.brew-Input--textInput')).toBe(true);
    });

    it('properly passes through a className', () => {
        const testClassName = `testClass${Math.floor(Math.random() * 100000)}`;
        expect(shallow(<TextInput className={testClassName} />).hasClass(testClassName)).toBe(true);
    });

    it('correctly adds the before prop', () => {
        const Before = () => <div className="before">before</div>;
        const input = mount(<TextInput before={<Before />} />);
        expect(input.contains(Before())).toBe(true);
    });

    it('correctly adds an after prop', () => {
        const After = () => <div className="after">after</div>;
        const input = mount(<TextInput after={<After />} />);
        expect(input.contains(After())).toBe(true);
    });

});
