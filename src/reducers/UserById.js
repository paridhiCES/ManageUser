import { FETCH_USER_BY_ID } from '../actions/constants'

export default function userByIdReducer (state = [], action) {
  switch (action.type) {
    case FETCH_USER_BY_ID:
      return action.user
    default:
      return state
  }
}
