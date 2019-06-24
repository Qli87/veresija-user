import { accountConstants } from '../constants/account.constants' 

export function getAccounts_request(accounts) {
    return {
        type: accountConstants.GETACCOUNTS_REQUEST,
        payload: accounts
    }
} 

export function getAccounts_success(accounts) {
    return {
        type: accountConstants.GETACCOUNTS_SUCCESS,
        payload: accounts
    }
}

export function getAccounts_failure(error) {
    return {
        type: accountConstants.GETACCOUNTS_FAILURE,
        payload: error
    }
}

export function getAccountsForHp_request(accounts) {
    return {
        type: accountConstants.GETACCOUNTSFORHP_REQUEST,
        payload: accounts
    }
}

export function getAccountsForHp_success(accounts) {
    return {
        type: accountConstants.GETACCOUNTSFORHP_SUCCESS,
        payload: accounts
    }
}

export function getAccountsForHp_failure(error) {
    return {
        type: accountConstants.GETACCOUNTSFORHP_FAILURE,
        payload: error
    }
}

export function getAccountsHistory_request(history) {
    return {
        type: accountConstants.GETACCOUNTHISTORY_REQUEST,
        payload: history
    }
}

export function getAccountsHistory_success(history) {
    return {
        type: accountConstants.GETACCOUNTHISTORY_SUCCESS,
        payload: history
    }
}

export function getAccountsHistory_failure(error) {
    return {
        type: accountConstants.GETACCOUNTHISTORY_FAILURE,
        payload: error
    }
}

export function getAccountDetails_request(account) {
    return {
        type: accountConstants.GETACCOUNTDETAILS_REQUEST,
        payload: account
    }
}

export function getAccountDetails_success(account) {
    return {
        type: accountConstants.GETACCOUNTDETAILS_SUCCESS,
        payload: account
    }
}

export function getAccountDetails_failure(error) {
    return {
        type: accountConstants.GETACCOUNTDETAILS_FAILURE,
        payload: error
    }
}

export function editAccount_request(account) {
    return {
        type: accountConstants.ACCOUNTEDIT_REQUEST,
        payload: account
    }
}

export function editAccount_success(account) {
    console.log('action: ', account)
    return {
        type: accountConstants.ACCOUNTEDIT_SUCCESS,
        payload: account
    }
}

export function editAccount_failure(error) {
    return {
        type: accountConstants.ACCOUNTEDIT_SUCCESS,
        payload: error
    }
}


export function accountPayment_request(account) {
    return {
        type: accountConstants.ACCOUNTPAYMENT_REQUEST,
        payload: account
    }
}

export function accountPayment_success(account) {
    return {
        type: accountConstants.ACCOUNTPAYMENT_SUCCESS,
        payload: account
    }
}


export function accountPayment_failure(error) {
    return {
        type: accountConstants.ACCOUNTPAYMENT_FAILURE,
        payload: error
    }
}


export function deleteAccount_request(account) {
    return {
        type: accountConstants.ACCOUNTDELETE_REQUEST,
        payload: account
    }
}

export function deleteAccount_success(account) {
    return {
        type: accountConstants.ACCOUNTDELETE_SUCCESS,
        payload: account
    }
}

export function deleteAccount_failure(error) {
    return {
        type: accountConstants.ACCOUNTDELETE_FAILURE,
        payload: error
    }
}

export function addAccount_request(account) {
    return {
        type: accountConstants.ACCOUNTADD_REQUEST,
        payload: account
    }
}

export function addAccount_success(account) {
    return {
        type: accountConstants.ACCOUNTADD_SUCCESS,
        payload: account
    }
}

export function addAccount_failure(account) {
    return {
        type: accountConstants.ACCOUNTADD_FAILURE,
        payload: account
    }
}