import React from 'react';
import renderer from 'react-test-renderer';
import { Login } from '../Login';

describe('Login', () => {
    it('should render Login properly', () => {
        const component = renderer.create(<Login />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
