import { connect } from 'react-redux'
import UserForm from '../components/UserForm'
import { bindActionCreators } from 'redux'
import * as userActions from '../actions/UserActions'


const mapStateToProps = (state) => {
  return state
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
