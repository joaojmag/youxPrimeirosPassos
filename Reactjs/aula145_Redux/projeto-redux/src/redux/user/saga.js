import { all, takeEvery, call, put, delay, takeLatest } from 'redux-saga/effects'
import { fetchUsersSuccess, fetchUsersFailure, fetchUsersByIdSucesso } from './slice'

import axios from 'axios'
//Api users http://jsonplaceholder.typicode.com/users/

function* fetchUsers() {
    try {
        yield delay(1000) // simular demora de 1 s para requisição

        const response = yield call(axios.get, "http://jsonplaceholder.typicode.com/users/")
        yield put(fetchUsersSuccess(response.data))

    } catch (error) {
        yield put(fetchUsersFailure(error.message))
    }
}

function* fetchUsersById() {
    try {

        const response = yield call(axios.get, "http://jsonplaceholder.typicode.com/users/2")
        yield put(fetchUsersByIdSucesso(response.data))
        console.log('dentro do fetchUsersById depois do fetchUsersByIdSucesso');

    } catch (error) {
        console.log(error);
    }
}

export default all([
    // takeEvery('user/fetchUsers', fetchUsers)
    takeLatest('user/fetchUsers', fetchUsers),
    takeEvery('user/fetchUsersById', fetchUsersById)
])