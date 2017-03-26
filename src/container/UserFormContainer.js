import { connect } from 'react-redux'
import UserForm from '../components/UserForm'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/UserActions'

const getUserById = (users, id) => {
  const user = users.filter(user => user.id == id )
  if(user) return user[0];
  return null;
}

const mapStateToProps = (state, ownProps) => {
  const userId = ownProps.params.id;
  let user = {id : '', name : '', address : '', contact : '', email : ''}
  if (userId){
    user = getUserById(state.users[0], parseInt(userId))
  }
  return {
    user: user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

const Form = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserForm)

export default Form
