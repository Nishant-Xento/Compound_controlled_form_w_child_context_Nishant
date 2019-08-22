import React from 'react'

const btnStyle = {
  backgroundColor: 'darkolivegreen',
  border: 'none',
  color: 'white',
  fontSize: '1rem',
  padding: '8px 16px'
}

const disabledBtnStyle = {
  ...btnStyle,
  opacity: '0.5'
}

const FormSubmit = ({ children, isComplete }) => (
  <button
    style={isComplete ? btnStyle : disabledBtnStyle}
    disabled={!isComplete}
  >
    {children || 'Submit'}
  </button>
)

FormSubmit.displayName = 'FormSubmit'

export default FormSubmit
