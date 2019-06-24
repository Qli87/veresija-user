import { call, put, takeEvery } from 'redux-saga/effects'
import { getUsers_api, getTranslations_api, getUsersForHP_api, getUserHistory_api, editUser_api, addUser_api, getUsersForSelect_api } from '../api/user.api'
import { getUsers_failure, getUsers_success, getTranslations_failure, getTranslations_success, getUsersForHP_failure, getUsersForHP_success, 
    getUserHistory_success, getUserHistory_request, editUser_request, editUser_success, editUser_failure, getUserDetails_failure, 
    getUserDetails_success, addUser_failure, addUser_success, getUsersSelect_success, getUsersSelect_failure } from '../actions/user.actions'
import { userConstants } from '../constants/user.constants'

export function* getUsers() {
    const response = yield call(getUsers_api);
    if(!response || !response.data){
        return yield put(getUsers_failure('Internal server error for getUsers'))
    }
    if(response.status === 200) {
        return yield put(getUsers_success(response.data))
    } else {
        return yield put(getUsers_failure('Error for getUsers()'))
    }
}

export function* getTranslations() {
    const response = yield call(getTranslations_api)
    if(!response || !response.data) {
        return yield put(getTranslations_failure('Internal server error for getTranslations'))
    }
    if(response.status === 200) {
        return yield put(getTranslations_success(response.data))
    } else {
        return yield put(getTranslations_failure('Error for getTranslations'))
    }
}


export function* getUsersForHP() {
    const response = yield call(getUsersForHP_api);
    if(!response || !response.data){
        return yield put(getUsersForHP_failure('Internal server error for getUsers'))
    }
    if(response.status === 200) {
        return yield put(getUsersForHP_success(response.data))
    } else {
        return yield put(getUsersForHP_failure('Error for getUsers()'))
    }
}

export function* editUser(action) {
    console.log(action);
    const response = yield call(editUser_api);
    if(!response || !response.data) {
        return yield put(editUser_request('Internal server error for edit user'))
    }
    if(response.status === 200) {
        return yield put(editUser_success(response.data))
    } else {
        return yield put(editUser_failure('Error for edit user'))
    }
}

export function* getUserHistory() {
    //fake api
    //need api with userId request, to get a details for exact user
    const response = yield call(getUserHistory_api);
    if(!response || !response.data) {
        return yield put(getUsersForHP_failure('Internal server error for user history'))
    }
    if(response.status === 200) {
        return yield put(getUserHistory_success(response.data))
    } else {
        return yield put(getUsersForHP_failure('Error for loading user history'))
    }
}

export function* getUserDetails(user) {
    //pass user details to api to make a post request valid
    const response = yield call(editUser_api);
    if(!response || !response.data){
        return yield put(getUserDetails_failure('Internal server error for user details'))
    }
    if(response.status === 200) {
        return yield put(getUserDetails_success(response.data))
    } else {
        return yield put(getUserDetails_failure('Error for getting user details'))
    }
}

export function* addUser(user) {
    //this will work only 'locally', need a real api with user details
    console.log('user in saga: ', user)
    const response = yield call(addUser_api(user));
    if(!response || !response.data) {
        return yield put(addUser_failure('Internal sever error for add user'))
    }
    if(response.status === 200) {
        return yield put(addUser_success(response.data))
    } else {
        return yield put(addUser_failure('Error for add user'))
    }
}

export function* getUsersSelect() {
    const response = yield call(getUsersForSelect_api);
    if(!response || !response.data) {
        return yield put(getUsersSelect_failure('Internal server error for user select'))
    }
    if(response.status === 200) {
        return yield put(getUsersSelect_success(response.data))
    } else {
        return yield put(getUsersSelect_failure('Error for edit user select'))
    }
}

export function* userSaga() {
    yield takeEvery(userConstants.GETUSERS_REQUEST, getUsers)
    yield takeEvery(userConstants.GETTRANSLATIONS_REQUEST, getTranslations)
    yield takeEvery(userConstants.GETUSERSFORHP_REQUEST, getUsersForHP)
    yield takeEvery(userConstants.GETUSERHISTORY_REQUEST, getUserHistory)
    //make a reguest for edit user !!! userConstants.EDITUSER_REQUEST not ..._SUCCESS
    // yield takeEvery(userConstants.EDITUSER_REQUEST, editUser)
    yield takeEvery(userConstants.GETUSERDETAILS_REQUEST, getUserDetails)
    // same thing like editUser, when make a real api request it will work, for now works only locally
    yield takeEvery(userConstants.ADDUSER_REQUEST, addUser)
    yield takeEvery(userConstants.GETUSERSSELECT_REQUEST, getUsersSelect)
}
