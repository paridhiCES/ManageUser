import React,{ PropTypes } from 'react'
import _ from 'lodash'
import '../css/App.css'

const Table = ({tableData, style}) => {
  return(
        <div>
          <table style={style}>
            <tbody>
              <tr>
                <th>Name</th>
                <th>Address</th>
                <th>Contact</th>
                <th>Email</th>
              </tr>
              {_.map(tableData, function(row){
                  return (
                  <tr key={row.id}>
                      <td>{row.name}</td>
                      <td>{row.address}</td>
                      <td>{row.contact}</td>
                      <td>{row.email}</td>
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
  style: PropTypes.object,
}

export default Table
