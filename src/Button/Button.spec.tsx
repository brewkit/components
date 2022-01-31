import React from 'react';
import { mount } from 'enzyme';
import Button from '.';

describe('<Button />', () => {
  const wrapper = mount(
    <Button disabled loading>
      Submit
    </Button>
  );
  const disabledClasses = 'button.MuiButton-root.Mui-disabled';

  test('use button slot', () => {
    expect(wrapper.contains('Submit')).toEqual(true);
  });

  test('loading prop toggle', () => {
    expect(wrapper.prop('loading')).toEqual(true);
    wrapper.setProps({ loading: false });
    expect(wrapper.prop('loading')).toEqual(false);
  });

  /**
   * When the loading prop is true, and button is not explicitly
   * disabled - Button is clickable with loader overlay which shoudnt be the case
   * Can be fixed if we replace nullish operator (??) with logical OR (||),
   * since we want it to be disabled if either prop is truthy
   */
  test('button is disabled', () => {
    wrapper.setProps({ disabled: true, loading: false });
    expect(wrapper.find(disabledClasses)).toHaveLength(1);
  });
});
