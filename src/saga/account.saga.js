import { call, put, takeEvery } from 'redux-saga/effects'
import { getAccounts_api, getAccountsForHp_api, getAccountsHistory_api, getAccountDetails_api, editAccount_api, accountPayment_api, accountDelete_api, accoundAdd_api } from '../api/account.api'
import { getAccounts_failure, getAccounts_success, getAccountsForHp_failure, getAccountsForHp_success, getAccountsHistory_failure, getAccountsHistory_success, getAccountDetails_failure, getAccountDetails_success, editAccount_failure, editAccount_success, accountPayment_failure, accountPayment_success, deleteAccount_failure, deleteAccount_success, addAccount_failure, addAccount_success } from '../actions/account.actions'
import { getUsersSelect_request, getUsersSelect_success, getUsersSelect_failure} from '../actions/user.actions'
import { accountConstants } from '../constants/account.constants'
import { userConstants } from '../constants/user.constants';
import { getUsersForSelect_api } from '../api/user.api';


export function* getAccounts() {
    const response = yield call(getAccounts_api)
    if(!response || !response.data) {
        return yield put(getAccounts_failure('Internal server error for getAccounts'))
    }
    if(response.status === 200) {
        return yield put(getAccounts_success(response.data))
    } else {
        return yield put(getAccounts_failure('Error for loading accounts'))
    }
}

export function* getAccountsForHp() {
    const response = yield call(getAccountsForHp_api);
    if(!response || !response.data) {
        return yield put(getAccountsForHp_failure('Internal server error for get accounts for homepage'))
    }
    if(response.status === 200) {
        return yield put(getAccountsForHp_success(response.data))
    } else {
        return yield put(getAccountsForHp_failure('Error for loading accounts for homepage'))
    }
}

export function* getAccountHistory(accountId) {
    const response = yield call(getAccountsHistory_api);
    if(!response || !response.data) {
        return yield put(getAccountsHistory_failure('Internal server error for loading account history'))
    }
    if(response.status === 200) {
        return yield put(getAccountsHistory_success(response.data))
    } else {
        return yield put(getAccountsHistory_failure('Error for loading history for account'))
    }
}

export function* getAccoutDetails(accountId) {
    const response = yield call(getAccountDetails_api())
    if(!response || !response.data) {
        return yield put(getAccountDetails_failure('Internal server error for account details'))
    }
    if(response.status === 200) {
        return yield put(getAccountDetails_success(response.data))
    } else {
        return yield put(getAccountDetails_failure('Error for loading accout detials'))
    }
}

export function* editAccount(account) {
    const response = yield call(editAccount_api(account));
    if(!response || !response.data) {
        return yield put(editAccount_failure('Internal server error for edit account'))
    }
    if(response.status === 200) {
        return yield put(editAccount_success(response.data))
    } else {
        return yield put(editAccount_failure('Error for edit account'))
    }
}

export function* accountPayment(details) {
    const response = yield call(accountPayment_api(details))
    if(!response || !response.data) {
        return yield put(accountPayment_failure('Internal server error for account payment'))
    }
    if(response.status === 200) {
        return yield put(accountPayment_success(response.data))
    } else {
        return yield put(accountPayment_failure('Error for account payment'))
    }
}

export function* accountDelete(account) {
    const response = yield call(accountDelete_api(account))
    if(!response || !response.data) {
        return yield put(deleteAccount_failure('Internal server error for delete account'))
    }
    if(response.status === 200) {
        return yield put(deleteAccount_success(response.data))
    } else {
        return yield put(deleteAccount_failure('Error for delete accout'))
    }
}

export function* accountAdd(account) {
    const response = yield call(accoundAdd_api(account))
    if(!response || !response.data) {
        return yield put(addAccount_failure('Internal server error for add account'))
    }
    if(response.status === 200) {
        return yield put(addAccount_success(response.data))
    } else {
        return yield put(addAccount_failure('Error for add account'))
    }
}

export function* accountSaga() {
    yield takeEvery(accountConstants.GETACCOUNTS_REQUEST, getAccounts)
    yield takeEvery(accountConstants.GETACCOUNTSFORHP_REQUEST, getAccountsForHp)
    yield takeEvery(accountConstants.GETACCOUNTHISTORY_REQUEST, getAccountHistory)
    //when make a real api change to accountConstants.GETACCOUNTDETAILS_REQUEST
    // yield takeEvery(accountConstants.GETACCOUNTDETAILS_SUCCESS, getAccoutDetails)
    //same think like getAccountDetails, sets to work locally for now
    // yield takeEvery(accountConstants.ACCOUNTEDIT_REQUEST, editAccount)
    yield takeEvery(accountConstants.ACCOUNTPAYMENT_REQUEST, accountPayment)
    yield takeEvery(accountConstants.ACCOUNTDELETE_REQUEST, accountDelete)
    yield takeEvery(accountConstants.ACCOUNTADD_REQUEST, accountAdd)
}