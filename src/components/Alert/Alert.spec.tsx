import React from 'react';
import renderer from 'react-test-renderer';
import Alert from '.'

describe('Alert component', () => {
  test('to render properly', () => {
    const tree = renderer.create(<Alert />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test.todo('Need to write more meaninful tests here!');
});
