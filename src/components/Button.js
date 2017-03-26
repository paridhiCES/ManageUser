import React,{ PropTypes } from 'react'

const Button = ({style, value, onClick}) => {
    return (
      <input type="button" style={style} value={value} onClick={onClick} />
    )
}

Button.propTypes = {
  style: PropTypes.object.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default Button
