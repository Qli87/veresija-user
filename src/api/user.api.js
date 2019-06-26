import axios from 'axios'

export function getUsers_api() {
    return axios.get('http://www.mocky.io/v2/5c0e93f82e00004831043f73')
}

export function getTranslations_api() {
    return axios.get('http://www.mocky.io/v2/5d10871a30000001404c9fec')
}

export function getUsersForHP_api() {
    return axios.get('http://www.mocky.io/v2/5cf62c7d3200005d308cd068')
}

export function getUserHistory_api() {
    //need a real server request, works with mocky.io
    return axios.get('http://www.mocky.io/v2/5cfa2111300000a406e3644a')
    // return axios.get('http://www.mocky.io/v2/5c3851a73100007200a98f4b', {
    //     params : {
    //         id: userId
    //     }
    // })
}

//for now works only localy, calling directly reducer success case
// and get user details from loaded list...
export function getUserDetails(user) {
    return axios.get('')
}

export function editUser_api(user) {
    //make api post request
}

export function addUser_api(user) {
    //make valid api request for user
    return axios.post('', {
        name: user.name,
        username: user.username,
        description: user.description,
        email: user.email,
        address: user.address,
        phone: user.phone
    })
}

export function getUsersForSelect_api() {
    return axios.get("http://www.mocky.io/v2/5c1b52a733000068007fd6ce");
}

export function login_api(user) {
    return axios.post('', {
        //...
    })
}