//Libs
import React,{Component} from 'react';
import { browserHistory } from 'react-router'

//Components
import Button from './Button'
import Table from './Table'

//Styles
import { buttonStyle, rootDiv, tableStyle, tableContainer } from '../css/Style'
import '../css/App.css';

class UserList extends Component {
  
  onClick = () => {
    browserHistory.push('/form')
  }

  componentDidMount(){
    console.log('componentDidMount');
    this.props.actions.fetchUsers()
  }

  render(){
    const {tableData} = this.props
    return(
      <div style={rootDiv}>
        <div>
          <Button style={buttonStyle}
            value="Add New User"
            onClick={this.onClick} />
        </div>
        <div style={tableContainer}>
          <Table style={tableStyle} tableData={tableData} />
        </div>
      </div>
    )
  }
}

UserList.propTypes = {
  actions: React.PropTypes.object,
  tableData: React.PropTypes.array,
  style: React.PropTypes.object,
}

export default UserList
