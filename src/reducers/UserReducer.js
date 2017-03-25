import { LOAD_USERS_IN_TABLE } from '../actions/constants'

export default function userReducer (state = [], action) {
  switch (action.type) {
    case LOAD_USERS_IN_TABLE:
      return [
        action.users
      ]
    default:
      return state
  }
}
