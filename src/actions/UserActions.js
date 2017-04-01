import { LOAD_USERS_IN_TABLE, FETCH_USER_BY_ID } from './constants'
import { browserHistory } from 'react-router'

export function loadUsers(users){
  return {
    type: LOAD_USERS_IN_TABLE,
    users: users
  }
}

export function userToUpdate(user){
  return {
    type: FETCH_USER_BY_ID,
    user:user
  }
}


export function fetchUsers(){
  return dispatch => {
    fetch(`http://localhost:8080/users`)
      .then(response => response.json())
      .then(json => dispatch(loadUsers(json)))
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


export function updateUser(user) {
  return dispatch => {
    fetch(`http://localhost:8080/users/${user.id}`, {
      method: "put",
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

export function deleteUser(userId) {
  return dispatch => {
    fetch(`http://localhost:8080/users/${userId}`, {
      method: "delete",
    }).then(response => dispatch(fetchUsers()))
  }
}


export function getUserById(userId, operation){
  console.log(operation)
  return dispatch => {
    fetch(`http://localhost:8080/users/${userId}`)
      .then(response => response.json())
      .then(json => {
          dispatch(userToUpdate(json))
      })
  }
}
