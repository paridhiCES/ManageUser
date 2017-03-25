export const buttonStyle = {
  backgroundColor: '#f4511e',
  color: '#FFFFFF',
  width: '200px',
  padding: '10px',
  borderRadius: '5px',
  cursor: 'pointer',
  border: 'none',
  display: 'inline-block',
  fontSize: '18px',
  margin: '10px',
  transition: 'width 2s'
}

export const buttonHover = {
  width: '300px'
}

export const rootDiv = {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
}

export const tableContainer = {
  padding:'5px',
  margin: '10px'
}

export const tableStyle = {
  width: '100%',
  overflow: 'scroll',
  borderCollapse: 'collapse',
  tableLayout: 'fixed',
  wordBreak: 'break-all'
}

export const formStyle = {
  width: '80%',
  boxShadow: '1px 1px 1px 1px darkgrey',
  padding: '18px',
  textAlign: 'center',
  marginLeft: '100px',
  marginTop: '25px'
}

export const submitStyle = (isSubmit) => {
    return {
      width: '46%',
      backgroundColor: isSubmit ? '#4CAF50' : '#CCC',
      color:  isSubmit ? 'white' : 'black',
      padding: '14px 20px',
      margin: '8px 0',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      margin: '10px'
  }
}

export const backBtnStyle = {
    padding: '5px',
    marginLeft: '63px',
    marginTop: '8px',
}

export const labelStyle = {
  textAlign: 'left',
  margin: '10px',
  fontWeight: 'bold',
  paddingLeft: '20px'
}

export const textBoxStyle = (validEmail) => {
  return {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0',
    display: 'inline-block',
    border: validEmail !== false ? '1px solid #ccc' : validEmail === false && '1px solid #D43939',
    borderRadius: '4px',
    boxSizing: 'border-box',
  }
}
