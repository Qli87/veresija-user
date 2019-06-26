import { userConstants } from '../constants/user.constants'

const initialState = {
    users: [],
    user: [],
    translations: [],
    historyDetails: [],
    userSelect: []
}

export default function userReducer(state = initialState, action) {
    switch(action.type) {
        case userConstants.LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case userConstants.LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case userConstants.GETUSERS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.GETUSERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case userConstants.GETUSERS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case userConstants.GETTRANSLATIONS_REQUEST:
            return {
                ...state,
                loading: true,
                translations: action.payload
            }
        case userConstants.GETTRANSLATIONS_SUCCESS:
            return {
                ...state,
                loading: false,
                translations: action.payload
            }
        case userConstants.GETTRANSLATIONS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case userConstants.GETUSERSFORHP_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.GETUSERSFORHP_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload
            }
        case userConstants.GETUSERSFORHP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case userConstants.GETUSERHISTORY_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.GETUSERHISTORY_SUCCESS:
            return {
                ...state,
                loading: false,
                historyDetails: action.payload
            }
        case userConstants.GETUSERHISTORY_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case userConstants.GETUSERDETAILS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.GETUSERDETAILS_SUCCESS:
            const index = state.users.findIndex(item => item.id == action.payload)
            if(index > -1) {
                let user = state.users.find(item => item.id == action.payload)
                return {
                    ...state,
                    users: state.users,
                    user: user
                }
            }
        case userConstants.GETUSERDETAILS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case userConstants.EDITUSER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.EDITUSER_SUCCESS:
            console.log('action payload: ', action.payload)
            const editedUsers = state.users.map(user => {
                if(user.id === action.payload.id) {
                    console.log('user in if loop: ',user)
                    return Object.assign({}, user, {
                        id: action.payload.id,
                        name: action.payload.name,
                        username: action.payload.username,
                        phone: action.payload.phone,
                        email: action.payload.email,
                        description: action.payload.description,
                        address: action.payload.address
                    })
                }
                return user
            })
            console.log('edited users: ', editedUsers)
            return {
                ...state,
                loading: false,
                users: editedUsers,
                user: editedUsers[action.payload.id]
            }
        case userConstants.EDITUSER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case userConstants.DELETEUSER_REQUEST:
            return {
                ...state,
                loading: false
            }
        case userConstants.DELETEUSER_SUCCESS:
            return {
                ...state,
                users: state.users.filter(user => user.id !== action.payload.id)
            }
        case userConstants.DELETEUSER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case userConstants.ADDUSER_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.ADDUSER_SUCCESS:
            return {
                ...state,
                loading: false,
                users: state.users.concat([action.payload])
            }
        case userConstants.ADDUSER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case userConstants.GETUSERSSELECT_REQUEST:
            return {
                ...state,
                loading: true
            }
        case userConstants.GETUSERSSELECT_SUCCESS:
            return {
                ...state,
                loading: false,
                userSelect: action.payload
            }
        case userConstants.GETUSERSSELECT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}