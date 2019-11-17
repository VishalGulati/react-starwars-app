import React from 'react';
import renderer from 'react-test-renderer';
import { Search } from '../Search';

describe('Search', () => {
    it('should render Search properly', () => {
        const component = renderer.create(<Search />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
