import { combineReducers } from 'redux'
import users from './UserReducer'
import user from './UserById'

const ManageUserApp = combineReducers({
  users,
  user
})

export default ManageUserApp;
