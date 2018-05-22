import { combineReducers } from 'redux'
import card from './card'
import dialog from './dialog'
import userInfo from './userInfo'

export default combineReducers({
    card,
    dialog,
    userInfo
})
