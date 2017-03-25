import React,{ PropTypes } from 'react'

const Button = ({style, value, onClick}) => {
    return (
      <input type="button" style={style} value={value} onClick={onClick} />
    )
}

Button.propTypes = {
  style: PropTypes.object,
  value: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
