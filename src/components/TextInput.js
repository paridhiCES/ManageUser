import React from 'react'
import { labelStyle, textBoxStyle } from '../css/Style'


const TextInput = ({label, name, value, onChange, validEmail, placeholder}) => {
    return(
      <div>
          <div style={labelStyle}>
            {label}
          </div>
          <div>
            <input type="text" style={{...textBoxStyle(validEmail)}} placeholder={placeholder} name={name} value={value} onChange={onChange} />
          </div>
      </div>
    )
}

TextInput.propTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func,
  validEmail: React.PropTypes.bool,
  placeholder: React.PropTypes.string,
}

export default TextInput
