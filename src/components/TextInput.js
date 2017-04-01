import React from 'react'
import { labelStyle, textBoxStyle } from '../css/Style'


const TextInput = ({type, label, name, value, onChange, isValid, placeholder, maxlength}) => {
    return(
      <div>
          <div style={labelStyle}>
            {label}
          </div>
          <div>
            <input type={type}
            style={{...textBoxStyle(isValid)}}
            placeholder={placeholder}
            name={name} value={value}
            onChange={onChange}
            maxlength={maxlength}
            />
          </div>
      </div>
    )
}

TextInput.propTypes = {
  label: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
  validEmail: React.PropTypes.bool,
  placeholder: React.PropTypes.string.isRequired,
}

export default TextInput
