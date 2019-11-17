import { put, call } from 'redux-saga/effects'

import {
    LOGIN_ACTION,
    LOGIN_SUCCESS_ACTION,
    LOGIN_FAIL_ACTION
} from '../login-constants';
import loginReducer, {
    loginAction,
    loginSuccess,
    loginSaga
} from '../login-store'
import { authenticate } from '../../api';

const initialState = {
    isLoading: false,
    data: null,
    error: null
}

const user = { username: 'luke', password: '19bby' };

describe('LoginStore', () => {
    it('should send login request properly', () => {
        const gen = loginSaga(loginAction(user));
        expect(gen.next().value).toEqual(call(authenticate, user))
        const data = { status: 200, data: 'authenticated' };
        expect(gen.next(data).value).toEqual(put(loginSuccess(data)))
        expect(gen.next().done).toBe(true)
    })
})
