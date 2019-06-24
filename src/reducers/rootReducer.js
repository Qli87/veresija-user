import { combineReducers } from 'redux'
import userReducer from './userReducer'
import accountReducer from './accountReducer'
import { localizeReducer } from 'react-localize-redux'


export default combineReducers({
    userReducer,
    accountReducer,
    localize: localizeReducer
})