import axios from 'axios'

export function getAccounts_api() {
    return axios.get('http://www.mocky.io/v2/5c17e1872f00005400af0e26')
}

export function getAccountsForHp_api() {
    return axios.get('http://www.mocky.io/v2/5cf630bc3200004f1d8cd085')
}

export function getAccountsHistory_api(accountId) {
    return axios.get('http://www.mocky.io/v2/5d0b7e5b2f00007000e3f13c');
}

export function getAccountDetails_api(accountId) {
    //create a real api for account details depending od accoutId
    return axios.get('')
}

export function editAccount_api(account) {
    return axios.post('', {
        
    })
}

export function accountPayment_api(details) {
    console.log(details)
    return axios.post('', {
    })
}

export function accountDelete_api(account) {
    return axios.delete('', {
        
    })
}

export function accoundAdd_api(account) {
    console.log('account in api: ', account)
    return axios.post('', {

    })
}