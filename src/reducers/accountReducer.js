import { accountConstants } from '../constants/account.constants'

const initialState = {
    accounts: [],
    accountHistory: [],
    accountDetails: []
}

export default function accountReducer(state = initialState, action) {
    switch(action.type) {
        case accountConstants.GETACCOUNTS_REQUEST:
            return  {
                ...state,
                loading: true
                // accounts: action.payload
            }
        case accountConstants.GETACCOUNTS_SUCCESS:
            return {
                ...state,
                loading: false,
                accounts: action.payload
            }
        case accountConstants.GETACCOUNTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case accountConstants.GETACCOUNTSFORHP_REQUEST:
            return {
                ...state,
                loading: true,
                accounts: state.accounts
            }
        case accountConstants.GETACCOUNTSFORHP_SUCCESS:
            return {
                ...state,
                loading: false,
                accounts: action.payload
            }
        case accountConstants.GETACCOUNTSFORHP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case accountConstants.GETACCOUNTHISTORY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case accountConstants.GETACCOUNTHISTORY_SUCCESS:
            return {
                ...state,
                loading: false,
                accountHistory: action.payload
            }
        case accountConstants.GETACCOUNTHISTORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        //edit account
        case accountConstants.GETACCOUNTDETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case accountConstants.GETACCOUNTDETAILS_SUCCESS:
            const index = state.accounts.findIndex(item => item.id == action.payload)
            if(index > -1) {
                let _account = state.accounts.find(item => item.id == action.payload)
                return {
                    ...state,
                    loading: false,
                    accountDetails: _account,
                    accounts: state.accounts
                }
            }

        case accountConstants.GETACCOUNTDETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case accountConstants.ACCOUNTEDIT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case accountConstants.ACCOUNTEDIT_SUCCESS:
            console.log('action.payload: ', action.payload.name.value)
            const editedAccounts = state.accounts.map(account => {
                if(account.id === action.payload.name.value){
                    return Object.assign({}, account, {
                        id: action.payload.name.value,
                        name: action.payload.name,
                        productDetails: action.payload.productDetails,
                        totalDebit: action.payload.totalDebit,
                        numberOfPayment: action.payload.numberOfPayment,
                        monthlyDebit: action.payload.monthlyDebit,
                        startedPayment: action.payload.startedPayment
                    })
                }
                return account
            })
            return {
                ...state,
                accounts: editedAccounts,
                account: editedAccounts[action.payload.id-1]
            }
        case accountConstants.ACCOUNTEDIT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case accountConstants.ACCOUNTDELETE_REQUEST:
            return {
                ...state,
                loading: true
            }
        case accountConstants.ACCOUNTDELETE_SUCCESS:
            return {
                ...state,
                loading: false,
                accounts: state.accounts.filter(item => item.id !== action.payload.id)
            }
        case accountConstants.ACCOUNTDELETE_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case accountConstants.ACCOUNTADD_REQUEST:
            return {
                ...state,
                loading: true
            }
        case accountConstants.ACCOUNTADD_REQUEST:
            return {
                ...state,
                loading: false,
                accounts: state.accounts.concat([action.payload])
            }
        case accountConstants.ACCOUNTADD_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}