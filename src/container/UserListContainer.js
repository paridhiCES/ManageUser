import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserList from '../components/UserList'
import * as userActions from '../actions/UserActions'

const mapStateToProps = (state) => {
  return {
      tableData: state.users[0]
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(userActions, dispatch)
  }
}

const UserData = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserList)

export default UserData
