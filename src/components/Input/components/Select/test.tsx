import React, { ReactElement } from 'react';
import renderer from 'react-test-renderer';
import Select from './index';
import InputBase from '../InputBase';
import { shallow, mount } from 'enzyme';


describe('Select', () => {

    
    it('renders correctly', () => {
        const tree = renderer
            .create(<Select name="name"><option>Option 1</option><option>Option 2</option></Select>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('applies the correct base classes', () => {
        const select = shallow(<Select />);
        expect(select.hasClass('brew-Select')).toBe(true);
    });

    it('uses the InputBase component', () => {
        const select = shallow(<Select />);
        expect(select.matchesElement(<InputBase />)).toBe(true);
    });

    it('renders a `select` element', () => {
        const select = shallow(<Select />);
        expect(select.render().find('select').length).toBe(1);
    });

    it('accepts options as children', () => {
        const select = shallow(<Select><option>an option</option></Select>);
        expect(select.render().find('option').length).toBe(1);
    });

    it('correctly passes through a classname', () => {
        const testClassName = `class-${Math.floor(Math.random() * 1000)}`;
        const select = shallow(<Select className={testClassName} />);
        expect(select.hasClass(testClassName)).toBe(true);
    });

    it('passes through an onchange handler', () => {
        const onChangeMock = jest.fn();
        const select = mount(<Select onChange={onChangeMock}/>);
        select.find('select').simulate('change');
        expect(onChangeMock).toHaveBeenCalled();
    });


});

