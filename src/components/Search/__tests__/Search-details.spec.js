import React from 'react';
import renderer from 'react-test-renderer';
import SearchDetails from '../SearchDetails';
import { searchDetailsRoute } from '../../router/route-constants'

describe('Search', () => {

    function props() {
        return {
            location: {
                pathname: `/${searchDetailsRoute}`,
                params: {
                    "name": "Tatooine",
                    "rotation_period": "23",
                    "orbital_period": "304",
                    "diameter": "10465",
                    "climate": "arid",
                    "gravity": "1 standard",
                    "terrain": "desert",
                    "surface_water": "1",
                    "population": "200000",
                }
            }
        }
    }

    it('should render Search Details properly', () => {
        const component = renderer.create(<SearchDetails {...props() } />);
        expect(component.toJSON()).toMatchSnapshot();
    });
});
