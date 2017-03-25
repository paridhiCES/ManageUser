import { combineReducers } from 'redux'
import users from './UserReducer'

const ManageUserApp = combineReducers({
  users
})

export default ManageUserApp;
