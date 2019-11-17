import { put, takeLatest, call } from 'redux-saga/effects';
import {
  LOGIN_ACTION,
  LOGIN_SUCCESS_ACTION,
  LOGIN_FAIL_ACTION
} from './login-constants';
import { authenticate } from '../../api';

const initialState = {
  isLoading: false,
  data: null,
  error: null
};

export const loginAction = ({ username, password }) => ({
  type: LOGIN_ACTION,
  username,
  password
});

export const loginSuccess = data => ({
  type: LOGIN_SUCCESS_ACTION,
  data
});

export const loginFail = error => ({
  type: LOGIN_FAIL_ACTION,
  error
});

export function* loginSaga(action) {
  try {
    const { username, password } = action;
    const data = yield call(authenticate, { username, password });
    yield put(loginSuccess(data));
  } catch ({ code, message }) {
    yield put(loginFail({ code, message }));
  }
}

export function* watchLogin() {
  yield takeLatest(LOGIN_ACTION, loginSaga);
}

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return {
        ...state,
        isLoading: true
      };

    case LOGIN_SUCCESS_ACTION:
      return {
        ...state,
        isLoading: false,
        data: action.data
      };

    case LOGIN_FAIL_ACTION:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
}
