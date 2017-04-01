import React,{ PropTypes } from 'react'
import { browserHistory } from 'react-router'
import '../css/App.css'
import Pencil from 'react-icons/lib/fa/pencil';
import Delete from 'react-icons/lib/fa/trash';
import { iconContainer, iconStyle } from '../css/Style'

const Table = ({tableData, style, actions}) => {
  const editUser = (userId) => {
    browserHistory.push(`/form/${userId}`)
  }

  const deleteUser = (userId) => {
    actions.deleteUser(userId)
  }

  return(
        <div>
          <table style={style}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Email</th>
                <th></th>
              </tr>
              {tableData && tableData.map(row => {
                  return (
                  <tr key={row.id}>
                      <td>{row.name}</td>
                      <td>{row.address}</td>
                      <td>{row.contact}</td>
                      <td>{row.email}</td>
                      <td>
                        <div style={iconContainer}>
                          <div style={iconStyle} onClick={() => editUser(row.id)}>
                            <Pencil />
                          </div>
                          <div style={iconStyle} onClick={() => deleteUser(row.id)}>
                            <Delete />
                          </div>
                        </div>
                      </td>
                    </tr>
                  )
                })}
            </tbody>
          </table>
        </div>
      )
    }

Table.propTypes = {
  actions: PropTypes.object,
  tableData: PropTypes.array,
  style: PropTypes.object.isRequired,
}

export default Table
