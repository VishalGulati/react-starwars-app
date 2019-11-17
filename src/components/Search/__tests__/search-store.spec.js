import { put, call } from 'redux-saga/effects'

import {
    SEARCH_ACTION,
    SEARCH_SUCCESS_ACTION,
    SEARCH_FAIL_ACTION
} from '../search-constants';
import searchReducer, {
    searchAction,
    searchSuccess,
    searchSaga
} from '../search-store'
import { getSearchResults } from '../../api';

const initialState = {
    isLoading: false,
    data: null,
    error: null
}

const searchTerm = 'tatooine';

describe('SearchStore', () => {
    it('should send search request properly', () => {
        const gen = searchSaga(searchAction(searchTerm));
        expect(gen.next().value).toEqual(call(getSearchResults, searchTerm))
        const data = [{
            "name": "Tatooine",
            "rotation_period": "23",
            "orbital_period": "304",
            "diameter": "10465",
            "climate": "arid",
            "gravity": "1 standard",
            "terrain": "desert",
            "surface_water": "1",
            "population": "200000",
        }];
        expect(gen.next(data).value).toEqual(put(searchSuccess(data)))
        expect(gen.next().done).toBe(true)
    })
})
