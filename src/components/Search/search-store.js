import { put, takeLatest, call } from 'redux-saga/effects';
import {
  SEARCH_ACTION,
  SEARCH_SUCCESS_ACTION,
  SEARCH_FAIL_ACTION
} from './search-constants';
import { getSearchResults } from '../../api';

const initialState = {
  isLoading: false,
  searchResults: null,
  error: null
};

export const searchAction = searchTerm => ({
  type: SEARCH_ACTION,
  searchTerm
});

export const searchSuccess = data => ({
  type: SEARCH_SUCCESS_ACTION,
  data
});

export const searchFail = error => ({
  type: SEARCH_FAIL_ACTION,
  error
});

export function* searchSaga(action) {
  try {
    const { searchTerm } = action;
    const data = yield call(getSearchResults, searchTerm);
    yield put(searchSuccess(data.results));
  } catch ({ code, message }) {
    yield put(searchFail({ code, message }));
  }
}

export function* watchSearch() {
  yield takeLatest(SEARCH_ACTION, searchSaga);
}

export default function searchReducer(state = initialState, action) {
  switch (action.type) {
    case SEARCH_ACTION:
      return {
        ...state,
        isLoading: true
      };

    case SEARCH_SUCCESS_ACTION:
      return {
        ...state,
        isLoading: false,
        searchResults: action.data
      };

    case SEARCH_FAIL_ACTION:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
}
