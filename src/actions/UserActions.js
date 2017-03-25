import { LOAD_USERS_IN_TABLE } from './constants'
import { browserHistory } from 'react-router'

export function loadUsers(users){
  return {
    type: LOAD_USERS_IN_TABLE,
    users: users
  }
}

export function fetchUsers(){
  return dispatch => {
    fetch(`http://localhost:8080/users`)
      .then(response => response.json())
      .then(json => { dispatch(loadUsers(json))})
  }
}

export function saveUser(user) {
  return dispatch => {
    fetch(`http://localhost:8080/users`, {
      method: "post",
      headers: {
          'Content-Type': 'application/json'
          },
      body: JSON.stringify({
        name: user.name,
        address: user.address,
        contact: user.contact,
        email: user.email
      })
    }).then(response => browserHistory.push('/'))
  }
}
