import React from 'react';
import renderer from 'react-test-renderer';
import Header from '../Header';

describe('Header', () => {
  it('should render Header properly', () => {
    const component = renderer.create(<Header />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
