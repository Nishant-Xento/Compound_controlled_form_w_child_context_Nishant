import React from 'react'
import PropTypes from 'prop-types'

const style = {
  color: 'red',
  display: 'block',
  fontSize: '16px',
  marginTop: '8px'
}

const FieldError = () => <span style={style}>{'This field is required'}</span>

FieldError.propTypes = {
  children: PropTypes.any
}

export default FieldError
