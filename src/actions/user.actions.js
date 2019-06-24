import { userConstants } from '../constants/user.constants'

export function getUsers_request(user) {
    return {
        type: userConstants.GETUSERS_REQUEST,
        payload: user
    }
}

export function getUsers_success(user) {
    return {
        type: userConstants.GETUSERS_SUCCESS,
        payload: user
    }
}

export function getUsers_failure(error) {
    return {
        type: userConstants.GETUSERS_FAILURE,
        payload: error
    }
}

export function getTranslations_request(trans) {
    return {
        type: userConstants.GETTRANSLATIONS_REQUEST,
        payload: trans
    }
}

export function getTranslations_success(trans) {
    return {
        type: userConstants.GETTRANSLATIONS_SUCCESS,
        payload: trans
    }
}

export function getTranslations_failure(trans){
    return {
        type: userConstants.GETTRANSLATIONS_FAILURE,
        payload: trans
    }
}

export function getUsersForHP_request(user) {
    return {
        type: userConstants.GETUSERSFORHP_REQUEST,
        payload: user
    }
}

export function getUsersForHP_success(user) {
    return {
        type: userConstants.GETUSERSFORHP_SUCCESS,
        payload: user
    }
}

export function getUsersForHP_failure(error) {
    return {
        type: userConstants.GETUSERSFORHP_FAILURE,
        payload: error
    }
}

export function getUserHistory_request(historyDetails) {
    return {
        type: userConstants.GETUSERHISTORY_REQUEST,
        payload: historyDetails
    }
}

export function getUserHistory_success(historyDetails) {
    return {
        type: userConstants.GETUSERHISTORY_SUCCESS,
        payload: historyDetails
    }
}

export function getUserHistory_failure(error) {
    return {
        type: userConstants.GETUSERHISTORY_FAILURE,
        payload: error
    }
}

export function editUser_request(user) {
    return {
        type: userConstants.EDITUSER_REQUEST,
        payload: user
    }
}

export function editUser_success(user) {
    return {
        type: userConstants.EDITUSER_SUCCESS,
        payload: user
    }
}

export function editUser_failure(error) {
    return {
        type: userConstants.EDITUSER_FAILURE,
        payload: error
    }
}

export function getUserDetails_request(user) {
    return {
        type: userConstants.GETUSERDETAILS_REQUEST,
        payload: user
    }
}

export function getUserDetails_success(user) {
    return {
        type: userConstants.GETUSERDETAILS_SUCCESS,
        payload: user
    }
}

export function getUserDetails_failure(error) {
    return {
        type: userConstants.GETUSERDETAILS_FAILURE,
        payload: error
    }
}

export function deleteUser_request(user) {
    return {
        type: userConstants.DELETEUSER_REQUEST,
        payload: user
    }
}

export function deleteUser_success(user) {
    return {
        type: userConstants.DELETEUSER_SUCCESS,
        payload: user
    }
}

export function deleteUser_failure(error) {
    return {
        type: userConstants.DELETEUSER_FAILURE,
        payload: error
    }
}

export function addUser_request(user) {
    return {
        type: userConstants.ADDUSER_REQUEST,
        payload: user
    }
}

export function addUser_success(user) {
    return {
        type: userConstants.ADDUSER_SUCCESS,
        payload: user
    }
}

export function addUser_failure(error) {
    return {
        type: userConstants.ADDUSER_FAILURE,
        payload: error
    }
}


export function getUsersSelect_request(user) {
    return {
        type: userConstants.GETUSERSSELECT_REQUEST,
        payload: user
    }
}

export function getUsersSelect_success(user) {
    return {
        type: userConstants.GETUSERSSELECT_SUCCESS,
        payload: user
    }
}

export function getUsersSelect_failure(error) {
    return {
        type: userConstants.GETUSERSSELECT_FAILURE,
        payload: error
    }
}