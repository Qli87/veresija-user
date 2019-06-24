import { all } from 'redux-saga/effects'
import { userSaga } from './user.saga'
import { accountSaga } from './account.saga'

export default function* rootSaga() {
    yield all ([
        userSaga(),
        accountSaga()
    ])
}